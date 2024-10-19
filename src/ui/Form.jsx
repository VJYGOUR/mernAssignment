import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { CreatetUser } from "../supabase/user";
import toast from "react-hot-toast";

function Form() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset } = useForm();

  const { mutate, isLoading } = useMutation({
    mutationFn: CreatetUser,
    onSuccess: () => {
      toast.success("New user successfullly created");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    mutate(data);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center flex-col gap-4"
    >
      <div className="grid grid-cols-[100px_200px] ">
        <label htmlFor="name">Name</label>
        <input
          className="border "
          type="text"
          id="name"
          {...register("Name", {
            required: "This Field is required",
          })}
        />
      </div>
      <div className="grid grid-cols-[100px_200px] ">
        <label htmlFor="age">Age</label>
        <input
          className="border "
          type="number"
          id="age"
          {...register("age", {
            required: "This Field is required",
          })}
        />
      </div>
      <div className="grid grid-cols-[100px_200px] ">
        <label htmlFor="proffession">Proffession</label>
        <input
          className="border"
          type="text"
          id="text"
          {...register("proffession", {
            required: "This Field is required",
          })}
        />
      </div>
      <button
        disabled={isLoading}
        className="bg-sky-500 text-white rounded px-2 py-2"
      >
        ADD DATA
      </button>
    </form>
  );
}

export default Form;
