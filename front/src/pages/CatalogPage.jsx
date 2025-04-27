import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CatalogPage() {
  const { category } = useParams();
  const watches = []; // Aquí irían los datos de tu API

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold capitalize">{category || 'All Watches'}</h1>
        <div className="flex gap-2">
          <Button variant="outline">Filter</Button>
          <Button variant="outline">Sort</Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {watches.map((watch, index) => (
          <Link 
            key={index}
            to={`/product/${watch.id}`}
            className="group transition-transform duration-300 hover:scale-105"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={watch.image}
                alt={watch.model}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold">{watch.brand}</h3>
              <p className="text-gray-500">{watch.model}</p>
              <p className="text-lg font-bold mt-2">${watch.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}