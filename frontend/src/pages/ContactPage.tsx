import { FC, FormEvent } from "react";

const ContactPage: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Contáctanos</h1>
        <p className="text-gray-600">¿Tienes alguna duda? ¡Estamos aquí para ayudarte!</p>
      </div>

      <form
        className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label className="block mb-2 text-blue-600 font-medium">Nombre</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-blue-600 font-medium">Correo Electrónico</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-blue-600 font-medium">Mensaje</label>
          <textarea
            className="w-full border border-gray-300 rounded-md px-4 py-3 min-h-[150px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
        >
          Enviar Mensaje
        </button>
      </form>

      <div className="mt-12 text-center text-gray-700 space-y-2">
        <div className="text-lg">✉️ carlos@luxurywatches.com</div>
        <div className="text-lg">📞 +51 914730603</div>
      </div>
    </div>
  );
};

export default ContactPage;
