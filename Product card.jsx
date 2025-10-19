
export default function ProductCard({ product }) {
  const handleAddToCart = () => {
    alert(`Added ${product.name} to cart`);
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="border rounded-lg shadow p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover mb-2"
      />
      <h3 className="font-semibold">{product.name}</h3>
      <p className="text-green-600 font-bold">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-700"
      >
        Add to Cart
      </button>
    </div>
  );
}
