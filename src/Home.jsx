import { Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";

const featuredProducts = [
  { id: 1, name: "Apple", price: 2, image: "/Apple.jpeg" },
  { id: 2, name: "Banana", price: 1, image: "/Banana.jpeg" },
  { id: 3, name: "Orange", price: 3, image: "/orange.jpeg" },
  { id: 4, name: "Bread", price: 2, image: "/Bread.jpeg" },
  { id: 5, name: "Cheese", price: 5, image: "/Cheese.jpeg" },
  { id: 6, name: "Eggs", price: 3, image: "/Eggs.jpeg" },
  { id: 7, name: "Tomato", price: 1, image: "/Tomato.jpeg" },
];

export default function Home() {
  return (
    <main className="px-0 md:px-6 py-0 md:py-6">
      {/* Hero Banner with many fruits image */}
      <section
        className="relative h-[260px] sm:h-[320px] md:h-[420px] w-full overflow-hidden"
        aria-labelledby="home-hero"
      >
        <img
          src="/background image.jpeg"
          alt="Fresh fruits assortment"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-16">
          <h1
            id="home-hero"
            className="text-3xl md:text-5xl font-extrabold text-white mb-3 md:mb-4"
          >
            Natural. Fresh. Organic.
          </h1>
          <p className="text-white/90 max-w-xl mb-4 md:mb-6">
            Discover tasty fruits and groceries delivered to your door.
          </p>
          <Link
            to="/products"
            aria-label="Shop all products"
            className="inline-block bg-green-500 text-white px-5 py-2 md:px-6 md:py-3 rounded hover:bg-green-600"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="my-8 px-6" aria-labelledby="featured-products">
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
