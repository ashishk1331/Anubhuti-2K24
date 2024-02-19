import { useStore } from "@/store/useForm.store";

export default function () {
  const loggedInUser = useStore((state) => state.loggedInUser);

  return (
    <>
      {loggedInUser &&
        loggedInUser.labels &&
        loggedInUser.labels.includes("admin") && (
          <div>
            <a
              className="font-medium text-gray-500 hover:text-voilet sm:py-6"
              href="/admin"
            >
              Admin
            </a>
          </div>
        )}
    </>
  );
}
