import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between">
      <div className="font-bold text-xl">Joyful Bites</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-200">
          Home
        </Link>
        <Link to="/products" className="hover:text-gray-200">
          Products
        </Link>
        <Link to="/about" className="hover:text-gray-200">
          About
        </Link>
        <Link to="/contact" className="hover:text-gray-200">
          Contact
        </Link>
      </div>
    </nav>
  );
}
