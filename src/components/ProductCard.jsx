import { useState } from "react";

function ProductCard({ name, price, image, setCartCount }) {
  const [added, setAdded] = useState(false);

  const handleCart = () => {
    if (added) {
      setCartCount((prev) => prev - 1);
    } else {
      setCartCount((prev) => prev + 1);
    }

    setAdded(!added);
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">
      <img src={image} alt="Product" className="h-56 w-full object-cover" />

      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>

          <p className="mt-1 text-lg font-semibold text-blue-600">
            Harga {price}
          </p>
        </div>

        <button
          onClick={handleCart}
          className={`w-full rounded-lg py-3 font-semibold text-white transition ${
            added
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {added ? " Added" : " Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
