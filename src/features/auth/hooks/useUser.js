import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../../services/apiAuth";

export function useUser() {
  const token = localStorage.getItem("authToken");
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => fetchUser(token),
    enabled: !token, // Only fetch if token exists
  });

  return { isLoading, user, error };
}
