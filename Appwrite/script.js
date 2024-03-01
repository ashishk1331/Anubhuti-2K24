import { ID, databases, storage } from "./appwrite.config";

export async function uploadData(events) {
  console.log("Uploading Data...");
  try {
    for (const event of events) {
      const { id, image, ...eventData } = event;
      const { eventName, organizingCouncil, type } = eventData;
      // console.log(eventName, type, organizingCouncil, eventData);
      // return;
      try {
        const blobImage = await fetch(image.src).then((response) =>
          response.blob()
        );
        const file = new File([blobImage], event.eventName, {
          type: blobImage.type,
        });
        const result = await storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
          ID.unique(),
          file
        );
        const data = await databases.createDocument(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
          ID.unique(),
          {
            imageId: result.$id,
            data: JSON.stringify(eventData),
            eventName: eventName,
            type: type,
            organizingCouncil: organizingCouncil,
          }
        );
        console.log("File uploaded:", data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
    console.log("Upload complete");
  } catch (error) {
    console.error("Error processing events:", error);
  }
}

export async function updateData() {}
