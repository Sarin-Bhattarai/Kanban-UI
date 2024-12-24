import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser as loginUserApi } from "../../../services/apiAuth";

export function useLoginUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: loginUser, isLoading: isLogging } = useMutation({
    mutationFn: loginUserApi,
    onSuccess: (data) => {
      toast.success("Login successfull");
      localStorage.setItem("authToken", data.token);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { loginUser, isLogging };
}
