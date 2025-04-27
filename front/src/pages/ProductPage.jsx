import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function ProductPage() {
  const { id } = useParams();
  const watch = {}; // Datos del producto

  return (
    <div className="container px-4 py-12 md:py-24">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="grid gap-4">
          <img
            src={watch.image}
            alt={watch.model}
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{watch.brand}</h1>
          <h2 className="text-2xl text-gray-500">{watch.model}</h2>
          <p className="text-3xl font-bold">${watch.price}</p>
          
          <div className="space-y-4">
            <Button className="w-full">Add to Cart</Button>
            <Button variant="outline" className="w-full">
              Add to Wishlist
            </Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Description</h3>
            <p className="text-gray-500">{watch.description}</p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Specifications</h3>
            <dl className="grid grid-cols-2 gap-4">
              <div className="border-t pt-2">
                <dt className="text-gray-500">Movement</dt>
                <dd>{watch.movement}</dd>
              </div>
              <div className="border-t pt-2">
                <dt className="text-gray-500">Case Size</dt>
                <dd>{watch.caseSize}mm</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}