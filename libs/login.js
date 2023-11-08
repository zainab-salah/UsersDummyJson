// loginUtils.js
import Cookies from "js-cookie";

export async function login(username, password) {
  let rememberMe=true
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (response.ok) {
   const data = await response.json();

    Cookies.set('userData', JSON.stringify(data), { expires: rememberMe ? 30 : null });
      return true; 
    } else {
      console.log(response);
      return false;  
    }
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
}
