import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, User, Sun, Moon } from "lucide-react";
import { useEffect } from "react";
import { useThemeStore } from "../store/useThemeStore";

const logo = "/logo.svg";
const darkModeLogo = "/light-logo.svg";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { theme, setTheme } = useThemeStore();

  // Apply theme to <html> & persist to localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("chat-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className="fixed top-0 z-40 w-full border-b border-base-300 bg-base-100/80 backdrop-blur-lg">
      <div className="container mx-auto h-16 px-4">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            <img
              src={theme === "light" ? logo : darkModeLogo}
              alt="talkify-logo"
              className="h-8 w-auto"
            />
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <input
              onClick={toggleTheme}
              aria-label="Toggle theme"
              type="checkbox"
              defaultChecked
              className="toggle"
            />

            {authUser && (
              <>
                <Link to="/profile" className="btn btn-sm gap-2">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  onClick={logout}
                  className="btn btn-sm flex items-center gap-2"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
