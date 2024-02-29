import { useStore } from "@/store/useForm.store";
import RegistrationCard from "./RegistrationCard";

export default function () {
  const registered = useStore((state) => state.registered);
  const registrations = useStore((state) => state.registrations);
  return (
    <div className="max-w-4xl px-4 py-10 mx-auto text-gray-800 sm:px-6 lg:px-8 lg:py-14">
      <div className="p-4 bg-white shadow rounded-xl sm:p-7 dark:bg-slate-900">
        <h2 className="text-xl font-semibold">My Registration</h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Manage your registrations.
        </p>
        {registered ? (
          <div className="flex flex-col mt-4">
            <RegistrationCard registration={registrations} />
          </div>
        ) : (
          <div className="flex flex-col mt-4 text-sm text-gray-700">
            <span>You have not Registered for the event.</span>
            <span>Register by filling out the registration form.</span>
            <a className="text-blue-600" href="/register">
              Register Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
