import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function ProductCard({ product, cart, setCart }) {

  const isAdded = cart.some(item => item.id === product.id);

  const handleAdd = () => {
    if (!isAdded) {
      setCart([...cart, product]);
    }
  };

  return (
    <div className="border rounded-xl shadow-lg overflow-hidden p-4">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-4">
        {product.name}
      </h2>

      <p className="text-gray-600">
        Rp {product.price}
      </p>

      <div className="flex gap-2 mt-4">

        <Button asChild variant="outline">
          <Link to={`/products/${product.id}`}>
            Detail
          </Link>
        </Button>

        <Button
          onClick={handleAdd}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add to Cart"}
        </Button>

      </div>

    </div>
  );
}

export default ProductCard;