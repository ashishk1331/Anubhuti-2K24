import { account, databases, storage } from "@/Appwrite/appwrite.config";
import { Query } from "appwrite";

export async function getUsers() {
  try {
    const body = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Appwrite-Response-Format": "1.4.0",
        "X-Appwrite-Project": process.env.NEXT_PUBLIC_APPWRITE_PROJECTID,
        "X-Appwrite-Key": process.env.NEXT_PUBLIC_APPWRITE_APIKEY,
      },
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/users`,
      body
    );
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return { total: 0, users: [] };
  }
}
export async function getRegistrations(page, capacity) {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_REGISTRATIONS_COLLECTIONID,
      [
        Query.limit(capacity),
        Query.offset(page * capacity - capacity),
        Query.orderDesc("$createdAt"),
      ]
    );
    return { total: response.total, documents: response.documents };
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [] };
  }
}
export async function getAllRegistrations() {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_REGISTRATIONS_COLLECTIONID,
      [Query.limit(10000), Query.orderDesc("$createdAt")]
    );
    return { total: response.total, documents: response.documents };
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [] };
  }
}
export async function getAllRegistrationsWithImage() {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_REGISTRATIONS_COLLECTIONID,
      [Query.limit(10000), Query.orderDesc("$createdAt")]
    );
    let data = [];
    response.documents.map((item) => {
      if (item.imageId != null) {
        const result = storage.getFilePreview(
          process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTTRANSACTIONS_BUCKETID,
          item.imageId
        );
        data.push({ ...item, href: result.href });
      } else data.push({ ...item, href: null });
    });
    return { total: response.total, documents: data, flag: true };
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [], flag: false };
  }
}
export async function getEventRegistrations(userId, registrationId, eventId) {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTREGISTRATIONS_COLLECTIONID,
      [
        Query.equal("userId", userId),
        Query.equal("registrationId", registrationId),
        Query.equal("eventId", eventId),
      ]
    );
    return response;
  } catch (error) {
    console.log(error);
    return { total: 0, documents: [] };
  }
}
export async function getUserEventRegistrations(userId, registrationId) {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTREGISTRATIONS_COLLECTIONID,
      [
        Query.equal("userId", userId),
        Query.equal("registrationId", registrationId),
      ]
    );

    return response.documents;
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function getAllTransactions(page, capacity) {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_COLLECTIONID,
      [Query.limit(capacity), Query.offset(page * capacity - capacity)]
    );
    // let data = [];
    // response.documents.map((item) => {
    //   const result = storage.getFilePreview(
    //     process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_BUCKETID,
    //     item.imageId
    //   );
    //   data.push({ ...item, href: result.href });
    // });
    return response;
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [] };
  }
}
export async function getUnverifiedTransactions(page, capacity) {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_COLLECTIONID,
      [
        Query.limit(capacity),
        Query.offset(page * capacity - capacity),
        Query.equal("verified", false),
      ]
    );
    let data = [];
    response.documents.map((item) => {
      const result = storage.getFilePreview(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_BUCKETID,
        item.imageId
      );
      data.push({ ...item, href: result.href });
    });
    return { total: response.total, documents: data };
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [] };
  }
}

export function downloadImage(id) {
  try {
    const result = storage.getFileDownload(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_BUCKETID,
      id
    );
    download(result.href);
  } catch (error) {
    console.log(error);
  }
}

function download(src) {
  const link = document.createElement("a");
  link.href = src;
  link.download = "image.jpg";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export async function getEvents() {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
      [Query.limit(80), Query.offset(0)]
    );
    let data = [];
    response.documents.map((item) => {
      const eventPoster = storage.getFilePreview(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
        item.eventPoster
      );
      data.push({ ...item, eventPoster: eventPoster.href });
    });
    return { total: response.total, documents: data };
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [] };
  }
}
export async function getEvent(id) {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
      [Query.equal("$id", id)]
    );

    let data = [];
    response.documents.map((item) => {
      const eventPoster = storage.getFilePreview(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
        item.eventPoster
      );
      const image1 = storage.getFilePreview(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
        item.image1
      );
      const image2 = storage.getFilePreview(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTPOSTERS_BUCKETID,
        item.image2
      );
      data.push({
        ...item,
        eventPoster: eventPoster.href,
        image1: image1.href,
        image2: image2.href,
      });
    });
    if (response.total == 0) return { total: 0, documents: [], flag: false };
    return { total: response.total, documents: data, flag: true };
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [], flag: false };
  }
}

export async function getEventWithoutImage(id) {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
      [Query.equal("$id", id)]
    );
    if (response.total == 0) return { total: 0, documents: [], flag: true };
    return { total: response.total, documents: response.documents, flag: true };
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [], flag: false };
  }
}
export async function getEventsWithoutImage(id) {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTS_COLLECTIONID,
      [Query.limit(80), Query.offset(0)]
    );
    return { total: response.total, documents: response.documents, flag: true };
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [], flag: false };
  }
}

export async function getRegistrationsByEventId(id, page = 1, capacity = 20) {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTREGISTRATIONS_COLLECTIONID,
      [
        Query.limit(capacity),
        Query.offset(page * capacity - capacity),
        Query.equal("eventId", id),
      ]
    );

    return { total: response.total, documents: response.documents, flag: true };
  } catch (error) {
    console.log(error);
    return { total: 0, documents: [], flag: false };
  }
}
export async function getAllRegistrationsByEventId(id) {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_EVENTREGISTRATIONS_COLLECTIONID,
      [Query.limit(1000), Query.equal("eventId", id)]
    );

    return { total: response.total, documents: response.documents, flag: true };
  } catch (error) {
    console.log(error);
    return { total: 0, documents: [], flag: false };
  }
}

export async function getAllTransactionsWithImage() {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_COLLECTIONID,
      [Query.limit(10000)]
    );
    let data = [];
    response.documents.map((item) => {
      const result = storage.getFilePreview(
        process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_BUCKETID,
        item.imageId
      );
      data.push({ ...item, href: result.href });
    });
    return { total: response.total, documents: data, flag: true };
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [], flag: false };
  }
}
