import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser as registerUserApi } from "../../../services/apiAuth";

export function useRegisterUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: registerUser,
    isLoading: isRegistering,
    error,
  } = useMutation({
    mutationFn: registerUserApi,
    onSuccess: () => {
      toast.success("Account has been registered successfully");
      navigate("/login");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (error) => {
      const message =
        error.response?.data?.message ||
        "An error occurred during registration";
      toast.error(message);
    },
  });

  return { registerUser, isRegistering, error };
}
