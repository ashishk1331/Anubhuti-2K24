// pages/index.js

import { ID, databases, storage } from "@/Appwrite/appwrite.config";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function EventForm() {
  const [form, setForm] = useState({
    eventName: "",
    organizingCouncil: "",
    description: "",
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
      const eventPoster = await storage.createFile(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
        ID.unique(),
        form.eventPoster
      );
      console.log("Uploaded Image 1");
      // return;
      const image1 = await storage.createFile(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
        ID.unique(),
        form.image1
      );
      console.log("Uploaded Image 2");
      const image2 = await storage.createFile(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
        ID.unique(),
        form.image2
      );
      console.log("Uploaded Image 3");
      const response = await databases.createDocument(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
        ID.unique(),
        {
          eventName: form.eventName,
          description: form.description,
          organizingCouncil: form.organizingCouncil,
          eventPoster: eventPoster.$id,
          image1: image1.$id,
          image2: image2.$id,
        }
      );
      console.log("Uploaded Data");
      console.log(response);
      setForm({
        eventName: "",
        organizingCouncil: "",
        description: "",
        image1: null,
        image2: null,
        eventPoster: null,
      });
      toast.Success("Success");
    } catch (error) {
      toast.error("Error adding event");
    }
    setLoading(false);
  };

  return (
    <div className="container w-full mx-auto mt-8">
      <Toaster position="top-right" reverseOrder />
      <form
        className="max-w-md p-8 mx-auto bg-white shadow-md"
        onSubmit={handleSubmit}
      >
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
            className="w-full p-2 border"
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
            className="w-full p-2 border"
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
            className="w-full p-2 border"
            rows="5"
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
            required
            onChange={handleInputChange}
            className="w-full p-2 border"
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
            required
            onChange={handleInputChange}
            className="w-full p-2 border"
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
            required
            onChange={handleInputChange}
            className="w-full p-2 border"
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

        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
