import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Header({ cart, search, setSearch }) {
  return (
    <header className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        E-Commerce
      </h1>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white text-black px-3 py-2 rounded"
      />

      <nav className="flex gap-3">
        <Button asChild>
          <Link to="/">Home</Link>
        </Button>

        <Button asChild>
          <Link to="/products">Products</Link>
        </Button>

        <Button asChild>
          <Link to="/cart">
            Cart ({cart.length})
          </Link>
        </Button>
      </nav>
    </header>
  );
}

export default Header;