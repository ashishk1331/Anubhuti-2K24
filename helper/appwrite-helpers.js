import { account, databases } from "@/Appwrite/appwrite.config";

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
export async function getTransactions() {
  try {
    const response = await databases.listDocuments(
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_DATABASEID,
      process.env.NEXT_PUBLIC_APPWRITE_ANUBHUTI_TRANSACTIONS_COLLECTIONID
    );
    return response;
  } catch (error) {
    console.log(error.message);
    return { total: 0, documents: [] };
  }
}
