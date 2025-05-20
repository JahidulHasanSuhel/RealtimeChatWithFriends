import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { MessageSquare, Settings, User, LogOut } from "lucide-react";

function Navbar() {
  const { logout, authUser } = useAuthStore();

  return (
    <header className="border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur bg-base-100/80">
      <div className="max-w-7xl mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full w-full">

          {/* Logo + Title */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-all"
          >
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <h1 className="text-lg font-bold">Chatty</h1>
          </Link>

          {/* Right-side buttons */}
          <div className="flex items-center gap-3">
            
            {/* Settings */}
            <Link
              to="/settings"
              className="btn btn-sm gap-2 flex items-center justify-center"
            >
              <Settings className="w-4 h-4 text-gray-600" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {/* Profile and Logout */}
            {authUser && (
              <>
                <Link
                  to="/profile"
                  className="btn btn-sm gap-2 flex items-center justify-center"
                >
                  <User className="w-5 h-5 text-gray-600" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  onClick={logout}
                  className="btn btn-sm gap-2 flex items-center justify-center"
                >
                  <LogOut className="w-5 h-5 text-gray-600" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
