import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-8">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-80 rounded"
      />

      <h1 className="text-4xl font-bold mt-5">
        {product.title}
      </h1>

      <p className="mt-4">
        {product.description}
      </p>

      <p className="font-bold text-2xl mt-4">
        ${product.price}
      </p>

      <p className="mt-2">
        ⭐ {product.rating}
      </p>
    </div>
  );
}

export default ProductDetail;