import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

import laptop from "./assets/laptop.jpg";
import mouse from "./assets/mouse.jpg";
import keyboard from "./assets/keyboard.jpg";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 15000000,
      image: laptop,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      price: 350000,
      image: mouse,
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 850000,
      image: keyboard,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cartCount} />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 p-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
            setCartCount={setCartCount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;