import { useState } from "react";
import BackButton from "../ui/BackButton";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // Handle login logic (e.g., API call)
  };

  return (
    <>
      <BackButton />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:w-96 mx-auto text-center">
          <span className="text-2xl font-light">Login to Your Account</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-blue-400 rounded-t-md"></div>
            <form className="px-8 py-6" onSubmit={handleSubmit}>
              {/* Email Input */}
              <label className="block font-semibold text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border w-full h-10 px-3 mt-1 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              {/* Password Input */}
              <label className="block font-semibold text-sm">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border w-full h-10 px-3 mt-1 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
