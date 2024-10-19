import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeleteUser } from "../supabase/user";
import toast from "react-hot-toast";

function DeleteButton({ userId }) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: DeleteUser,
    onSuccess: () => {
      toast.success("User deleted successfully");
      // You can trigger a refetch or refresh your list of users here
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  });

  return (
    <button
      className="font-bold border bg-red-600 text-white rounded"
      onClick={() => mutate(userId)}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
