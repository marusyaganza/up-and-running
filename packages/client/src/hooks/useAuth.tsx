import { useEffect, useState } from "react";
import { Role } from "../generated/graphql";
import { client } from "../apolloClient";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<Role | null | undefined>(null);
  const [token, setToken] = useState("");

  const saveToken = ({
    token,
    role,
  }: {
    token: string;
    role?: Role | null;
  }) => {
    localStorage.setItem("token", token);
    setToken(token);
    console.log("role in save", role);
    setRole(role);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setRole(null);
    setIsAuthenticated(false);
    client.resetStore();
  };

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(token);
      setIsAuthenticated(true);
    }
  }, []);

  return { saveToken, logout, isAuthenticated, token, role };
}
