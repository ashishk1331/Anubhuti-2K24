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
export async function getRegistrations() {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_REGISTRATIONS_COLLECTIONID
    );
    return response;
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [] };
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
  } catch (error) {}
}

function download(src) {
  const link = document.createElement("a");
  link.href = src;
  link.download = "image.jpg"; // You can set the desired filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
