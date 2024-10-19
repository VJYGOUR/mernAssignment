import { useState } from "react";
import BackButton from "../ui/BackButton";
function Registration() {
  const [formData, setFormData] = useState({
    name: "",
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
    console.log("Form submitted:", formData);
    // Handle form submission (e.g., call an API)
  };

  return (
    <>
      <BackButton />
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:w-96 mx-auto text-center">
          <span className="text-2xl font-light">Register Your Account</span>
          <div className="mt-4 bg-white shadow-md rounded-lg text-left">
            <div className="h-2 bg-blue-400 rounded-t-md"></div>
            <form className="px-8 py-6" onSubmit={handleSubmit}>
              {/* Name Input */}
              <label className="block font-semibold text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border w-full h-10 px-3 mt-1 mb-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />

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
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
