import { Link } from "react-router-dom";
import { Home, Video, User } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-48 min-h-screen bg-black p-2 shadow hidden sm:block">
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:bg-gray-800 text-white flex items-center p-2 gap-2 rounded-md">
          <Home size={20} /> Home
        </Link>
        <a href="#" className="hover:bg-gray-800 text-white flex items-center p-2 gap-2 rounded-md">
          <Video size={20} /> Shorts
        </a>
        <a href="#" className="hover:bg-gray-800 text-white flex items-center p-2 gap-2 rounded-md">
          <User size={20} /> Subscriptions
        </a>
        <a href="#" className="hover:bg-gray-800 text-white p-2 rounded-md">Library</a>
        <a href="#" className="hover:bg-gray-800 text-white p-2 rounded-md">History</a>
      </nav>
    </aside>
  );
}
