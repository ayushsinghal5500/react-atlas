import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { getCountryData } from "'api/DataApi'";
import { Button } from "./ui/button";
import { getCountryData} from "@/api/DataApi";
const Index = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch country data on component mount
  useEffect(() => {
    const getCountries = async () => {
      try {
        const response = await getCountryData();
        console.log(response);
        setCountries(response.data.slice(0, 7)); // Fetch only the first 7 countries
      } catch (err) {
        console.error("Error fetching country data:", err);
        setError("Failed to load country data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getCountries();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="container mx-auto px-6 my-2 md:px-12 lg:px-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* First Column: Text and Button */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">
            Explore a Country at a Glance
          </h1>
          <p className="text-gray-600 text-lg mb-4">
            Discover the beauty and diversity of countries worldwide. Dive into
            their rich histories, cultures, and stunning landscapes with ease.
          </p>
          <Link to="/country">
            <Button variant="outline" size="sm" className="gap-2">
              <span>Explore More</span>
              <FaArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Second Column: Image */}
        <div className="flex items-center justify-center">
          <img
            src="/world.jpeg"
            alt="Explore Country"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Horizontal Scrollable Country Cards */}
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Featured Countries
        </h2>
        <div className="flex overflow-x-auto gap-4">
          {loading ? (
            <div className="text-center text-lg font-semibold">Loading...</div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : (
            countries.slice(0, window.innerWidth < 640 ? 1 : countries.length).map((country, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg w-full sm:w-64 md:w-56 lg:w-64 xl:w-72 p-4 flex flex-col items-center"
              >
                <img
                  src={country.flags?.png || country.flags?.svg}
                  alt={`${country.name.common} flag`}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-bold">{country.name.common}</h3>
                <p className="text-sm text-gray-600">
                  Capital: {country.capital?.[0] || "Not available"}
                </p>
                <p className="text-sm text-gray-600">
                  Languages: {Object.values(country.languages || {}).join(", ")}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
