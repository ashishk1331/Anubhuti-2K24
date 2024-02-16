import { useStore } from "@/store/useForm.store";

export default function () {
  const loggedInUser = useStore((state) => state.loggedInUser);
  return <div>{JSON.stringify(loggedInUser)}</div>;
}
