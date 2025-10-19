import { Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";

const featuredProducts = [
  { id: 1, name: "Apple", price: 2, image: "/image/apple.jpg" },
  { id: 2, name: "Banana", price: 1, image: "/image/banana.jpg" },
  { id: 3, name: "Orange", price: 3, image: "/image/orange.jpg" },
  { id: 4, name: "Milk", price: 4, image: "/image/milk.jpg" },
  { id: 5, name: "Bread", price: 2, image: "/image/bread.jpg" },
  { id: 6, name: "Eggs", price: 3, image: "/image/eggs.jpg" },
  { id: 7, name: "Cheese", price: 5, image: "/image/cheese.jpg" },
  { id: 8, name: "Tomato", price: 1, image: "/image/tomato.jpg" },
];

export default function Home() {
  return (
    <main className="px-6 py-6">
      <section className="text-center my-6" aria-labelledby="home-hero">
        <h1 id="home-hero" className="text-4xl font-bold mb-4">
          Welcome to Joyful Bites Store!
        </h1>
        <p className="mb-4">Fresh groceries delivered to your doorstep.</p>
        <Link
          to="/products"
          aria-label="Shop all products"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Shop Now
        </Link>
      </section>

      <section className="my-8" aria-labelledby="featured-products">
        <h2 id="featured-products" className="text-2xl font-semibold mb-4">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
