import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)} // Navigate back
      className="bg-gray-300 text-black font-semibold py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
    >
      Back
    </button>
  );
}
