import { Package2 } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Package2 className="h-6 w-6 mr-2 text-white" />
            <span className="text-lg font-semibold text-white">Your App</span>
          </div>
          <nav className="space-x-4">
            <Link to="/privacy" className="text-white hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="text-white hover:underline">Terms of Service</Link>
          </nav>
        </div>
        <div className="mt-4 text-center text-sm text-gray-200">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
