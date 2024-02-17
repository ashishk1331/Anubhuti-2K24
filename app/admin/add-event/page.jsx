"use client";
import EventForm from "@/components/admin/event/EventForm";

export default function () {
  return (
    <div className="p-4 sm:w-[80%] mx-auto">
      <h1 className="mt-4 mb-4 text-2xl font-semibold text-gray-500">
        Add Event
      </h1>
      <EventForm />
    </div>
  );
}
