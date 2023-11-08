export async function getUsers() {

  try {
    const response = await fetch("https://dummyjson.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
}
