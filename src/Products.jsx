import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Apple",
    price: 2,
    image: "/Apple.jpeg",
    category: "Fruits",
  },
  {
    id: 2,
    name: "Banana",
    price: 1,
    image: "/Banana.jpeg",
    category: "Fruits",
  },
  {
    id: 3,
    name: "Orange",
    price: 3,
    image: "/orange.jpeg",
    category: "Fruits",
  },
  {
    id: 4,
    name: "Bread",
    price: 2,
    image: "/Bread.jpeg",
    category: "Bakery",
  },
  {
    id: 5,
    name: "Cheese",
    price: 5,
    image: "/Cheese.jpeg",
    category: "Dairy",
  },
  {
    id: 6,
    name: "Eggs",
    price: 3,
    image: "/Eggs.jpeg",
    category: "Dairy",
  },
];

export default function Products() {
  return (
    <main className="px-6 py-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">All Products</h1>
        <p className="text-gray-600">
          Browse by category or add items to your cart.
        </p>
      </header>

      <section
        aria-labelledby="products-list"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <h2 id="products-list" className="sr-only">
          Products list
        </h2>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
