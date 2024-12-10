import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { registerUser, loginUser, fetchUser } from "../../../services/apiAuth";

export const useRegisterUser = () => {
  const queryClient = useQueryClient();

  return useMutation(registerUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation(loginUser, {
    onSuccess: (data) => {
      localStorage.setItem("authToken", data.token); //storing token
      queryClient.invalidateQueries("user");
    },
  });
};

export const useUser = () => {
  const token = localStorage.getItem("authToken");

  return useQuery("user", () => fetchUser(token), { enabled: !token }); //Only fetch if token exists
};
