import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    name: "Apple",
    price: 2,
    image: "/image/apple.jpg",
    category: "Fruits",
  },
  {
    id: 2,
    name: "Banana",
    price: 1,
    image: "/image/banana.jpg",
    category: "Fruits",
  },
  {
    id: 3,
    name: "Orange",
    price: 3,
    image: "/image/orange.jpg",
    category: "Fruits",
  },
  {
    id: 4,
    name: "Milk",
    price: 4,
    image: "/image/milk.jpg",
    category: "Dairy",
  },
  {
    id: 5,
    name: "Cheese",
    price: 5,
    image: "/image/cheese.jpg",
    category: "Dairy",
  },
  {
    id: 6,
    name: "Bread",
    price: 2,
    image: "/image/bread.jpg",
    category: "Bakery",
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
