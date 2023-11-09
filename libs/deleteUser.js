export async function deleteUser(id) {
  const response = await fetch(`https://dummyjson.com/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }
  return response.json();
}
