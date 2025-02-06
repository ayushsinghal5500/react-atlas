import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Updated import for Button component

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full bg-black text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            WorldAtlas
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link to="/country" className="hover:text-gray-300 transition-colors">
            Country
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>

          </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? "✖" : "☰"}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="flex flex-col bg-black p-4 space-y-2 md:hidden"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/country" className="text-white hover:text-gray-300">
            Country
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
