import { useState, FormEvent } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Suscrito con:", email);
    setEmail("");
  };

  return (
    <section className="py-16 bg-slate-100">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-4xl text-slate-900 mb-4 sm:text-3xl">
            Únete a Nuestro Boletín
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Mantente al día con nuestras últimas colecciones y ofertas exclusivas
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto flex flex-wrap justify-center gap-4"
        >
          <input
            type="email"
            className="flex-1 min-w-[250px] px-4 py-3 border-2 border-slate-300 rounded-lg text-base focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="whitespace-nowrap px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Suscribirse
          </button>
        </form>

        <p className="mt-4 text-slate-500 text-sm max-w-md mx-auto">
          Al suscribirte, aceptas nuestros términos y política de privacidad.
        </p>
      </div>
    </section>
  );
}
