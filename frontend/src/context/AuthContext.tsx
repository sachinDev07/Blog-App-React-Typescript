import { createContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";

type LoginInputs = {
  username: string;
  password: string;
};

export const AuthContext = createContext<{
  currentUser: LoginInputs;
  login: (inputs: LoginInputs) => Promise<void>;
  logout: () => Promise<void>;
}>({
  currentUser: {
    username: "",
    password: "",
  },
  login: async () => {},
  logout: async () => {},
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const savedUser = localStorage.getItem("user");
  const initialUser = savedUser
    ? JSON.parse(savedUser)
    : { username: "", password: "" };
  const [currentUser, setCurrentUser] = useState<LoginInputs>(initialUser);

  const login = async (inputs: LoginInputs) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/auth/login",
        inputs
      );
      setCurrentUser(res.data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const logout = async () => {
    try {
      const res = await axios.post("/auth/logout");
      console.log(res);
      setCurrentUser({ username: "", password: "" });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
