import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">
            Contact Us
          </Link>

          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  