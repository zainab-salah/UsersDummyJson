export async function updateUser(user) {
  const response = await fetch(`https://dummyjson.com/users/${user.id}`, {
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
    throw new Error("Login failed");
  }

  return response.json();
}
