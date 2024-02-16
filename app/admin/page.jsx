"use client";
import { useStore } from "@/store/useForm.store";

export default function () {
  const loggedInUser = useStore((state) => state.loggedInUser);

  return (
    <div className="w-full ">
      <div className="flex gap-4">
        <a href="/admin/users">Users</a>
        <a href="/admin/users">Events</a>
        <a href="/admin/users">Add Event</a>
      </div>
    </div>
  );
}
