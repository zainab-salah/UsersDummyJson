// loginUtils.js
import Cookies from "js-cookie";

export async function deleteUser(id) {
  try {
    const response = await fetch(`https://dummyjson.com/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      Cookies.remove("userData");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
}
