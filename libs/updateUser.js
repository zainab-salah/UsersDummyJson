export async function updateUser(user) {
  const updateApi = process.env.USER_API;

  const response = await fetch(`${updateApi}${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      gender: user.gender,
    }),
  });

  if (!response.ok) {
    throw new Error("Update failed");
  }

  return response.json();
}
