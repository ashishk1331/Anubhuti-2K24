"use client";
import { ID, databases, storage } from "@/Appwrite/appwrite.config";
import Loader from "@/components/ui/Loader";
import { getEvent, getEventWithoutImage } from "@/helper/appwrite-helpers";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function ({ params: { id } }) {
  const [event, setEvent] = useState({ total: 0, documents: [] });
  const [error, setError] = useState(false);
  async function init() {
    const data = await getEventWithoutImage(id);
    if (data.flag == false) setError(true);
    setEvent(data);
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      {error ? (
        <div className="p-10 min-h-[60vh] text-base text-gray-600 flex justify-center items-center">
          Failed to fetch data
        </div>
      ) : (
        <>
          {event.total > 0 ? (
            <>
              <div className="max-w-3xl px-4 pt-2 pb-12 mx-auto lg:pt-5 sm:px-6 lg:px-8 marker:text-voilet">
                <Update event={event.documents[0]} />
              </div>
            </>
          ) : (
            <div className="flex flex-col mx-auto items-center justify-center w-full h-[40vh] gap-4 sm:flex-row">
              <Loader />
              <span>fetching event...</span>
            </div>
          )}
        </>
      )}
    </>
  );
}

function Update({ event }) {
  const router = useRouter();
  const [form, setForm] = useState({
    eventName: event.eventName,
    organizingCouncil: event.organizingCouncil,
    description: event.description,
    image1: null,
    image2: null,
    eventPoster: null,
  });
  const [loading, setLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      let data = {
        eventName: form.eventName,
        organizingCouncil: form.organizingCouncil,
        description: form.description,
      };
      if (form.eventPoster != null) {
        console.log("Updating eventPoster");
        const eventPoster = await storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
          ID.unique(),
          form.eventPoster,
        );
        data = { ...data, eventPoster: eventPoster.$id };
        console.log("Updated eventPoster");
      }
      if (form.image1 != null) {
        console.log("Updating image1");
        const image1 = await storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
          ID.unique(),
          form.image1,
        );
        data = { ...data, image1: image1.$id };
        console.log("Updated image1");
      }
      if (form.image2 != null) {
        console.log("Updating image2");
        const image2 = await storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
          ID.unique(),
          form.image2,
        );
        data = { ...data, image2: image2.$id };
        console.log("Updated image2");
      }

      const response = await databases.updateDocument(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
        event.$id,
        data,
      );
      console.log("Updated Data");
      setForm({
        ...form,
        image1: null,
        image2: null,
        eventPoster: null,
      });
      toast.success("Success");
    } catch (error) {
      console.log(error);
      toast.error("Error updating event");
    }
    setLoading(false);
  };

  async function deleteEvent() {
    setLoading(true);
    try {
      console.log("Deleting Data");
      const images = [event.eventPoster, event.image1, event.image2];
      const data = await databases.deleteDocument(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
        event.$id,
      );
      console.log("Deleted Data");
      console.log("Deleting Images");
      for (let i of images) {
        console.log("Deleting ");
        const image = await storage.deleteFile(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
          i,
        );
        console.log("Deleted");
      }
      toast.success("Success");
      router.push("/admin/update-event");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error deleting event");
    }
    toast("Delete");
  }

  return (
    <div className="w-full mx-auto mt-8 ">
      <Toaster position="top-right" reverseOrder />
      <div>
        <h2 className="text-2xl text-gray-600 ">
          Upadate Event : {event.eventName}
        </h2>
      </div>
      <form className="max-w-xl mt-8 bg-white " onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="eventName"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Event Name
          </label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            required
            value={form.eventName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="organizingCouncil"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Organizing Council
          </label>
          <input
            type="text"
            id="organizingCouncil"
            name="organizingCouncil"
            value={form.organizingCouncil}
            required
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="8"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="eventPoster"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Event Poster
          </label>
          <input
            type="file"
            id="eventPoster"
            name="eventPoster"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            accept=".jpg, .jpeg, .png"
          />
          {form.eventPoster && (
            <img
              src={URL.createObjectURL(form.eventPoster)}
              alt="Additional Event Poster"
              className="h-auto max-w-full mt-2"
            />
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="image1"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Event Brochure 1
          </label>
          <input
            type="file"
            id="image1"
            name="image1"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            accept=".jpg, .jpeg, .png"
          />
          {form.image1 && (
            <img
              src={URL.createObjectURL(form.image1)}
              alt="Event Poster 1"
              className="h-auto max-w-full mt-2"
            />
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="image2"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Event Brochure 2
          </label>
          <input
            type="file"
            id="image2"
            name="image2"
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            accept=".jpg, .jpeg, .png"
          />
          {form.image2 && (
            <img
              src={URL.createObjectURL(form.image2)}
              alt="Event Poster 2"
              className="h-auto max-w-full mt-2"
            />
          )}
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-voilet text-white hover:bg-voilet-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            Update
          </button>

          <button
            type="button"
            onClick={deleteEvent}
            class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 disabled:pointer-events-none"
          >
            <Trash size={20} />
            Delete Event
          </button>
        </div>
      </form>
    </div>
  );
}
