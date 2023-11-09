import Cookies from "js-cookie";

export default function getcookie() {
  const userCredentials = Cookies.get("userdata");

  if (userCredentials) {
    try {
      return JSON.parse(userCredentials);
    } catch (error) {
      console.error("Error parsing JSON from the 'userdata' cookie:", error);
    }
  }

  return false;
}
