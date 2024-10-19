import { useQuery } from "@tanstack/react-query";
import Form from "../ui/Form";
import Login from "./Login";
import Registration from "./Registration";
import { getUser } from "../supabase/user";
import DeleteButton from "../ui/DeleteButton";
import Edit from "../ui/Edit";
import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [showFormAdd, setShowFormAdd] = useState(false);

  const {
    isLoading,
    data: users,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });

  return (
    <div className="w-full flex flex-col items-center mt-12 ">
      <nav className="flex gap-4 mb-8">
        <Link to="registration">
          <button className="  bg-sky-500 text-white rounded px-2 py-2">
            register
          </button>
        </Link>
        <Link to="login">
          {" "}
          <button className="  bg-sky-500 text-white rounded px-2 py-2">
            Login
          </button>
        </Link>
      </nav>
      <main className="">
        <div className="grid grid-cols-[100px_100px_200px_100px]">
          <span className="font-bold">Name</span>
          <span className="font-bold">Age</span>
          <span className="font-bold">Proffession</span>
          <button className="font-bold">Delete</button>
        </div>
        {users &&
          users.map((curr, i) => {
            return (
              <>
                <section
                  key={i}
                  className="grid mb-2 grid-cols-[100px_100px_200px_100px_100px]"
                >
                  <div>{curr.Name}</div>
                  <div>{curr.age}</div>
                  <div>{curr.proffession}</div>
                  <Edit userId={curr.id} />
                  <DeleteButton userId={curr.id} />
                </section>
              </>
            );
          })}
      </main>
      <button
        className="ml-24 w-[20%] mt-8 bg-sky-500 text-white rounded px-2 py-2"
        onClick={() => setShowFormAdd(!showFormAdd)}
      >
        add new cabin
      </button>
      {showFormAdd && <Form />}
    </div>
  );
}

export default HomePage;
