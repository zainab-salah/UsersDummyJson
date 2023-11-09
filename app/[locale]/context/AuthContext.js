"use client";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const LoginApi = process.env.LOGIN_API;

  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    const userCredentials = Cookies.get("userdata");

    if (userCredentials) {
      setUser(JSON.parse(userCredentials));
    }
  }, []);
  const login = async (data) => {
    try {
      const response = await fetch(LoginApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Please Check Your Credentials");

      }

      const userData = await response.json();

      Cookies.set("userdata", JSON.stringify(userData), { expires: 7 });
      setUser(userData);

      return userData;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    setUser(null);
    Cookies.remove("userdata", { path: "/" });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        setUser,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
