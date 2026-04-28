import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      <h2 className="text-xl font-bold p-4">My App</h2>

      <nav className="flex flex-col gap-2 p-2">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">
          Settings
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;