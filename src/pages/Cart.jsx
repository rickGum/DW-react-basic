function Cart({ cart }) {
  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">
        Cart
      </h1>

      {cart.length === 0 ? (
        <p>Belum ada produk di keranjang.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border rounded-lg p-4"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Rp {item.price.toLocaleString()}</p>
              </div>

              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default Cart;