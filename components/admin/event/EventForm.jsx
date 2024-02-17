// EventForm.js
import { ID, databases, storage } from "@/Appwrite/appwrite.config";
import { useStore } from "@/store/useForm.store";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const EventForm = () => {
  const loggedInUser = useStore((state) => state.loggedInUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventDescription: "",
    posterImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "posterImage") {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] })); // Store the file object
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const promise = storage.createFile(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
        ID.unique(),
        formData.posterImage
      );
      promise.then(
        function (response) {
          console.log("Image Uploaded Successfully");
          const promise2 = databases.createDocument(
            process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
            process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
            ID.unique(),
            {
              name: formData.eventName,
              description: formData.eventDescription,
              date: formData.eventDate,
              imageId: response.$id,
              addedBy: loggedInUser.$id,
            }
          );
          promise2.then(
            function (response) {
              setLoading(false);
              setError("");
              setFormData({
                eventName: "",
                eventDate: "",
                eventDescription: "",
                posterImage: null,
              });
              e.target.reset();
              toast.success("Event Added");
            },
            function (error) {
              setLoading(false);
              setError(error.message);
              console.log(error);
            }
          );
        },
        function (error) {
          setLoading(false);
          setError(error.message);
          console.log("Error uploading Image", error);
        }
      );
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg p-8 mx-auto mt-8 bg-white border border-gray-200 rounded-md">
      <Toaster position="top-right" reverseOrder />
      <h2 className="mb-4 text-2xl font-semibold">Event Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">
            Event Name
          </label>
          <input
            type="text"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">
            Event Date
          </label>
          <input
            type="datetime-local"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">
            Event Description
          </label>
          <textarea
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">
            Poster Image
          </label>
          <input
            type="file"
            accept="image/*"
            name="posterImage"
            onChange={handleChange}
            className="w-full p-2 mt-1 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={` ${
            loading ? "bg-blue-300" : "bg-blue-500 "
          } px-4 py-2 text-white rounded-md`}
        >
          Submit
        </button>
      </form>
      {error && (
        <div className="mt-2 text-red-600">
          <span>! {error}</span>
        </div>
      )}
    </div>
  );
};

export default EventForm;
