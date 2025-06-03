import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { FaUserCircle } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ correo: "", password: "" });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) navigate("/profile");
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login(form);
      localStorage.setItem("token", res.data.access_token);
      setMessage("Inicio de sesión exitoso");
      setMessageType("success");
      setTimeout(() => navigate("/profile"), 500);
    } catch (err) {
      console.error("Error en login:", err);
      setMessage("Usuario o contraseña incorrectos");
      setMessageType("error");
    }
  };

  const goToRegister = () => navigate("/register");

  return (
    <div className="min-h-screen bg-[#0f0f0f] bg-[radial-gradient(circle_at_20%_20%,#1a1a1a_1px,transparent_1px),radial-gradient(circle_at_80%_80%,#1a1a1a_1px,transparent_1px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md p-10 bg-[#1c1c1c] rounded-xl border border-[#333] shadow-[0_0_20px_rgba(255,255,255,0.05)] text-center animate-fade-in">
        <h2 className="text-4xl mb-2 text-gray-500">
          <FaUserCircle className="inline" />
        </h2>
        <p className="text-gray-400 text-sm mb-1">
          Bienvenido de vuelta, ¡nos alegra verte!
        </p>
        <h2 className="text-2xl font-semibold mb-6 text-white">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="correo"
            placeholder="Correo"
            value={form.correo}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-600"
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-md bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-600"
          />
          <button
            type="submit"
            className="bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-md transition-transform hover:scale-[1.02]"
          >
            Iniciar sesión
          </button>
        </form>

        {message && (
          <p
            className={`mt-4 font-medium ${
              messageType === "success"
                ? "text-green-500"
                : messageType === "error"
                ? "text-red-500"
                : ""
            }`}
          >
            {message}
          </p>
        )}

        <button
          onClick={goToRegister}
          className="mt-4 py-3 px-4 w-full border border-gray-600 text-gray-300 rounded-md hover:bg-[#333] hover:text-white transition"
        >
          ¿No tienes cuenta? Regístrate
        </button>
      </div>
    </div>
  );
}
