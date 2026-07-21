import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetail() {

  const { id } = useParams();

  const product = products.find(
    item => item.id === Number(id)
  );

  if (!product) {
    return <h1>Produk tidak ditemukan</h1>;
  }

  return (
    <div className="max-w-xl mx-auto p-8">

      <img
        src={product.image}
        alt={product.name}
        className="rounded-lg"
      />

      <h1 className="text-3xl font-bold mt-5">
        {product.name}
      </h1>

      <p className="mt-3">
        {product.description}
      </p>

      <h2 className="mt-4 text-xl font-semibold">
        Rp {product.price.toLocaleString()}
      </h2>

    </div>
  );
}

export default ProductDetail;