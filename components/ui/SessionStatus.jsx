import { account } from "@/Appwrite/appwrite.config";
import { useStore } from "@/store/useForm.store";
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
  return loggedInUser ? (
    <>
      <a className="font-medium text-gray-500 hover:text-voilet sm:py-6" href="/profile">
        {getName()}
      </a>
      <button
        onClick={handleLogout}
        className="font-medium text-gray-500 hover:text-red-600 sm:py-6"
      >
        <span>Log Out</span>
      </button>
    </>
  ) : (
    <a
      className="font-medium text-gray-500 hover:text-voilet sm:py-6 flex items-center gap-x-2"
      href="/login"
    >
      <User size={16} />
      <span>Log in</span>
    </a>
  );
}
