"use client";
import { useStore } from "@/store/useForm.store";

export default function () {
  const loggedInUser = useStore((state) => state.loggedInUser);
  return (
    <div className="w-full p-4">
      <div className="flex flex-col gap-4 text-sm sm:flex-row">
        <a href="/admin/users">Users</a>
        <a href="/admin/add-event">Add Event</a>
        <a href="/admin/update-event">Update Event</a>
        <a href="/admin/registrations">Registrations</a>
        <a href="/admin/all-transactions">All Transactions</a>
        <a href="/admin/verify-transactions">Verify Transactions</a>
      </div>
    </div>
  );
}
