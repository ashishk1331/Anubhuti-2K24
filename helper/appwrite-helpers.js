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
    console.log({ total: 0, users: [] });
  }
}
