import { useStore } from "@/store/useForm.store";
import { Check } from "@phosphor-icons/react/dist/ssr";

export default function () {
  const registered = useStore((state) => state.registered);
  return (
    <div>
      {registered ? (
        <div className="flex flex-col sm:flex-row">
          <a
            href="/register"
            className="flex text-sm font-medium text-gray-500 gap-x-1 text-start"
          >
            Registered
            <Check className="mt-0.5" size={15} weight="bold" />
          </a>
        </div>
      ) : (
        <a
          className="flex items-center font-medium text-gray-500 hover:text-blue-600 "
          href="/register"
        >
          Register
        </a>
      )}
    </div>
  );
}
