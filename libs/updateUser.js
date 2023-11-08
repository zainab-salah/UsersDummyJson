import Cookies from "js-cookie";

export async function updateUser(user) {
  try {
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

    if (response.ok) {
      console.log(response)
      const data = await response.json();

      Cookies.set("userData", JSON.stringify(data));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
}
