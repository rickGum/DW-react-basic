import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products({ cart, setCart }) {
  return (
    <div className="max-w-6xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-8">
        Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>

    </div>
  );
}

export default Products;