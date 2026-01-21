import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Set a default user if none exists in localStorage
  const defaultUser = {
    id: 1,
    name: "John Doe",
    profilePic:
      "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  };

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || defaultUser
  );

  const login = () => {
    setCurrentUser(defaultUser);
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
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
