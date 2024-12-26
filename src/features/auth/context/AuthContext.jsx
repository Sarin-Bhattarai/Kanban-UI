import { useUser } from "../hooks/useUser";
import { createContext, useContext } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { user, isLoading } = useUser();

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext Context was used outside the AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
