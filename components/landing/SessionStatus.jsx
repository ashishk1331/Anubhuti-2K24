"use client";
import { account } from "@/Appwrite/appwrite.config";
import { useStore } from "@/store/useForm.store";
import { useEffect } from "react";
import { User } from "@phosphor-icons/react";
import toast from "react-hot-toast";

export default function () {
  const loggedInUser = useStore((state) => state.loggedInUser);
  const setLoggedInUser = useStore((state) => state.setLoggedInUser);
  const setRegistration = useStore((state) => state.setRegistration);
  async function handleLogout() {
    try {
      const promise = await account.deleteSessions();
      setRegistration(false);
      setLoggedInUser(null);
    } catch (error) {
      toast.error("Error Logging Out");
    }
  }
  function getName() {
    if (loggedInUser.name) {
      const [firstName, ...rest] = loggedInUser.name.split(" ");
      return firstName;
    } else if (loggedInUser.email) {
      const [firstName, ...rest] = loggedInUser.email.split("@");
      return firstName;
    }
  }
  async function init() {
    try {
      const loggedIn = await account.get();
      setLoggedInUser(loggedIn);
    } catch (err) {
      console.log(err);
      setLoggedInUser(null);
    }
  }
  useEffect(() => {
    init();
  }, []);
  return loggedInUser ? (
    <>
      <li>
        <a className="transition-all hover:underline" href="/profile">
          {getName()}
        </a>
      </li>
      <li>
        <button
          onClick={handleLogout}
          className="transition-all hover:underline flex items-center gap-x-2"
        >
          <span>Log Out</span>
        </button>
      </li>
    </>
  ) : (
    <div>
      <a
        className="transition-all hover:underline flex items-center gap-x-2"
        href="/login"
      >
        <User size={16} />
        <span>Log in</span>
      </a>
    </div>
  );
}
