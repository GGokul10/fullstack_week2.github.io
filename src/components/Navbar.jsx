import { Link } from "react-router-dom";
import logo from "../assets/youtube-logo.png";
import { Search } from "lucide-react";

export default function Navbar({ watchLaterCount }) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black text-white">
      <Link to="/">
        <img src={logo} alt="YouTube Logo" className="h-10" />
      </Link>

      {/* Search Bar */}
      <div className="flex items-center bg-white text-black rounded overflow-hidden w-full max-w-md mx-4">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-2 outline-none"
        />
        <button className="px-3">
          <Search size={20} className="text-gray-600" />
        </button>
      </div>

      <Link to="/watch-later" className="relative">
        Watch Later
        {watchLaterCount > 0 && (
          <span className="ml-1 text-sm text-yellow-300">
            ({watchLaterCount})
          </span>
        )}
      </Link>
    </nav>
  );
}
