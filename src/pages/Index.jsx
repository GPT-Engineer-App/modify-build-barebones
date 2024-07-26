import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Your App</h1>
            <p className="text-xl mb-8">Start building your application here.</p>
            <Button asChild size="lg">
              <Link to="/about">Get Started</Link>
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <nav className="space-x-4">
            <Link to="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="text-blue-600 hover:underline">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Index;