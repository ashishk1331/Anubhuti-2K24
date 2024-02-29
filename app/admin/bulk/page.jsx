"use client";
import { uploadData } from "@/Appwrite/script";
import { danceEvents } from "@/data/dance-events";
import { dramaticsEvents } from "@/data/dramatic-events";
import { litevents } from "@/data/lit";
import { musicevents } from "@/data/music-events";
import { pfacevents } from "@/data/pfac-events";

const UploadDataPage = () => {
  const dataMap = {
    music: musicevents,
    dance: danceEvents,
    pfac: pfacevents,
    lit: litevents,
    drama: dramaticsEvents,
  };
  const handleUpload = async (category) => {
    const events = dataMap[category];
    if (events) {
      await uploadData(events);
    } else {
      console.error(`Data for category "${category}" not found.`);
    }
  };

  return (
    <div>
      <h1>Data Upload Page</h1>
      <div className="flex flex-col gap-5 p-10">
        {/* <button onClick={() => handleUpload("music")}>Upload Music Data</button> */}
        {/* <button onClick={() => handleUpload("dance")}>Upload Dance Data</button> */}
        {/* <button onClick={() => handleUpload("pfac")}>Upload PFAC Data</button> */}
        <button onClick={() => handleUpload("lit")}>Upload Lit Data</button>
        {/* <button onClick={() => handleUpload("drama")}>Upload Drama Data</button> */}
      </div>
    </div>
  );
};

export default UploadDataPage;
