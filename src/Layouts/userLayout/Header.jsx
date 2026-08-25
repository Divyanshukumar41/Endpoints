import React from "react";
import { Link, useLocation } from "react-router-dom";
import { userRoutes } from "../../routes/routes";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isDocsPage = userRoutes.map((route) =>
    route.subLink.map((sub) => location.pathname === sub.path),
  );

  return (
    <header className="sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center  bg-white/30 rounded-b-xl neumorphic-flat">
        {/* Logo - Hide on /docs */}
        {isHomePage &&(
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Endpoints
          </Link>
        )}
        {!isDocsPage && (
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Endpoints
          </Link>
        )}

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="hover:text-blue-700 font-medium transition-colors"
          >
            Home
          </Link>

          <Link
            to="/docs"
            className="hover:text-blue-700 font-medium transition-colors"
          >
            Docs
          </Link>

          <a
            href="#contact"
            className="hover:text-blue-700 font-medium transition-colors"
          >
            Github
          </a>
        </div>

        {/* Sign Up */}
        <a
          href="#contact"
          className="hidden md:block px-6 py-2 rounded-full font-semibold neumorphic-flat hover:neumorphic-pressed bg-blue-600 text-white"
        >
          Sign Up
        </a>

        {/* Mobile Menu */}
        <button
          id="mobile-menu-button"
          className="md:hidden p-2 rounded-full neumorphic-flat hover:neumorphic-pressed"
        >
          <i data-lucide="menu"></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden container mx-auto px-6 pb-4"
      >
        <div className="mt-4 p-4 neumorphic-flat rounded-xl">
          <Link
            to="/"
            className="block py-2 text-center hover:text-blue-700 font-medium"
          >
            Home
          </Link>

          <Link
            to="/docs"
            className="block py-2 text-center hover:text-blue-700 font-medium"
          >
            Docs
          </Link>

          <a
            href="#contact"
            className="block py-2 text-center hover:text-blue-700 font-medium"
          >
            Github
          </a>

          <a
            href="#contact"
            className="block mt-4 w-full text-center py-3 rounded-full font-semibold neumorphic-flat hover:neumorphic-pressed"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
