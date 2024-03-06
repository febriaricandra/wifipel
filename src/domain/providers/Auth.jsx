import { useContext, createContext, useState } from "react";
import AuthServices from "@/domain/services/AuthService";

const AuthContext = createContext({
  user: null,
  login: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    try {
      const user = await AuthServices.login(userData);
      setUser(user.data);
      localStorage.setItem("user", JSON.stringify(user.data));
      console.log(user.data);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
