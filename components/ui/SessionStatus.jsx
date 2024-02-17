import { account } from "@/Appwrite/appwrite.config";
import { useStore } from "@/store/useForm.store";
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
  return (
    <div>
      {loggedInUser ? (
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="flex font-medium hover:text-blue-600 items-center gap-x-3.5 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 sm:py-0.5 sm:px-2"
            href="/profile"
          >
            {getName()}
          </a>
          <button
            onClick={handleLogout}
            className="text-sm font-medium text-gray-500 text-start"
          >
            Log Out
          </button>
        </div>
      ) : (
        <a
          className="flex items-center font-medium text-gray-500 gap-x-2 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6"
          href="/login"
        >
          <svg
            className="flex-shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
          </svg>
          Log in
        </a>
      )}
    </div>
  );
}
