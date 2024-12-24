import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerUser as registerUserApi } from "../../../services/apiAuth";

export function useRegisterUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: registerUser, isLoading: isRegistering } = useMutation({
    mutationFn: registerUserApi,
    onSuccess: () => {
      toast.success("Account has been registered successfully");
      navigate("/login");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { registerUser, isRegistering };
}
