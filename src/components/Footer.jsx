import { Package2, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-600 to-red-800 py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4 transform hover:scale-105 transition-transform duration-300">
              <Package2 className="h-8 w-8 mr-2 text-white" />
              <span className="text-2xl font-bold text-white">Your App</span>
            </div>
            <p className="text-gray-200 text-center md:text-left">Empowering your digital journey</p>
          </div>
          <nav className="flex flex-col items-center md:items-start space-y-2">
            <Link to="/about" className="text-white hover:text-yellow-300 transition-colors duration-300">About Us</Link>
            <Link to="/services" className="text-white hover:text-yellow-300 transition-colors duration-300">Services</Link>
            <Link to="/contact" className="text-white hover:text-yellow-300 transition-colors duration-300">Contact</Link>
          </nav>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="text-center md:text-right">
              <Link to="/privacy" className="text-white hover:text-yellow-300 transition-colors duration-300 mr-4">Privacy Policy</Link>
              <Link to="/terms" className="text-white hover:text-yellow-300 transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-300 border-t border-red-500 pt-4">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;