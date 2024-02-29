"use client";
import { uploadData } from "@/Appwrite/script";
import { danceEvents } from "@/data/dance-events";
import { dramaticsEvents } from "@/data/dramatic-events";
import { litevents } from "@/data/lit";
import { musicevents } from "@/data/music-events";
import { pfacevents } from "@/data/pfac-events";
import { tempdata } from "@/data/temp-data";

const UploadDataPage = () => {
  const dataMap = {
    music: musicevents,
    dance: danceEvents,
    pfac: pfacevents,
    lit: litevents,
    drama: dramaticsEvents,
    temp: tempdata,
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
      <h1>OO bhai kal aaana</h1>
      <div className="flex flex-col gap-5 p-10">
        {/* <button onClick={() => handleUpload("music")}>Upload Music Data</button> */}
        {/* <button onClick={() => handleUpload("dance")}>Upload Dance Data</button> */}
        {/* <button onClick={() => handleUpload("pfac")}>Upload PFAC Data</button> */}
        {/* <button onClick={() => handleUpload("lit")}>Upload Lit Data</button> */}
        {/* <button onClick={() => handleUpload("drama")}>Upload Drama Data</button> */}
        {/* <button onClick={() => handleUpload("temp")}>Upload Temp Data</button> */}
      </div>
    </div>
  );
};

export default UploadDataPage;
