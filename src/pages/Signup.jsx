import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Iltimos, barcha maydonlarni to‘ldiring");
      return;
    }

    signup(form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Ro‘yxatdan o‘tish</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email manzilingiz
            </label>
            <input
              type="email"
              id="email"
              value={form.email}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="example@mail.com"
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
                setError("");
              }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Parol
            </label>
            <input
              type="password"
              id="password"
              value={form.password}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="********"
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
                setError("");
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Ro‘yxatdan o‘tish
          </button>
        </form>

        <p className="mt-4 text-sm text-center">
          Allaqachon ro‘yxatdan o‘tgansizmi?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Kirish
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
