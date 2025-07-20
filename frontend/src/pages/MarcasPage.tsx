import { FC } from "react";

interface Marca {
  id: number;
  name: string;
  image: string;
}

import marcas from "../data/marcas";

const MarcasPage: FC = () => {
  return (
    <main className="py-20 px-8 min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-center text-4xl font-bold mb-12 font-serif tracking-wide text-gray-700">
        Nuestras Marcas de Relojes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {marcas.map((marca: Marca) => (
          <div
            key={marca.id}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 cursor-pointer h-80 flex flex-col justify-center items-center"
          >
            <img
              src={marca.image}
              alt={marca.name}
              className="h-20 object-contain mb-6 filter grayscale-[20%]"
            />
            <h2 className="text-xl font-semibold text-gray-600 font-serif">
              {marca.name}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MarcasPage;
