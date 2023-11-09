export async function login(data) {
  // let rememberMe = true;

  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: data.username, password: data.password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}
