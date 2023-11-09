export async function deleteUser({ id }) {
  const loginApi = process.env.USER_API;

  const response = await fetch(`${loginApi}${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Delete failed");
  }
 
  return response.json();
}
