function Navbar({ cartCount }) {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Product List
        </h1>

        <div className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
          <span className="font-semibold">
            Cart ({cartCount})
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;