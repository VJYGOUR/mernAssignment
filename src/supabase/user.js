import supabase from "./supabase";

export async function getUser() {
  let { data: users, error } = await supabase.from("users").select("*");
  if (error) {
    console.error(error);
    throw new Error("users could not be loaded");
  }
  return users;
}
export async function CreatetUser(newUser) {
  const { data, error } = await supabase
    .from("users")
    .insert([newUser])
    .select();

  if (error) {
    console.error(error);
    throw new Error("users could not be created");
  }
  return data;
}
export async function DeleteUser(id) {
  const { data, error } = await supabase.from("users").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("users could not be deleted");
  }
  return data;
}
