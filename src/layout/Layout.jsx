import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-400 bg-opacity-50 flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Outlet (Main content) */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;
