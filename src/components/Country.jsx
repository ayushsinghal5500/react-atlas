import { useState, useEffect, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { getCountryData } from "@/api/DataApi";
 import { Card  , CardHeader, CardTitle, CardContent, CardFooter} from "./ui/card";
 import { Input } from "./ui/input";
 import { Select , SelectItem, SelectTrigger, SelectContent } from "./ui/select";


 const Country = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("name");
  const navigate = useNavigate();

  useEffect(() => {
    getCountryData().then((response) => {
      setCountries(response.data);
      setFilteredCountries(response.data);
    });
  }, []);

  const handleFilterChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchQuery(value);

    const filtered = countries.filter((country) => {
      if (filterType === "name") {
        return country.name.common.toLowerCase().includes(value);
      } else if (filterType === "capital") {
        return country.capital?.[0]?.toLowerCase().includes(value);
      } else if (filterType === "language") {
        return Object.values(country.languages).some((lang) =>
          lang.toLowerCase().includes(value)
        );
      } else if (filterType === "currency") {
        return Object.values(country.currencies || {}).some((currency) =>
          currency.name.toLowerCase().includes(value)
        );
      }
      return false;
    });

    setFilteredCountries(filtered);
  };

  const handleFilterTypeChange = (value) => {
    setFilterType(value);
    setSearchQuery("");
    setFilteredCountries(countries);
  };

  const handleSeeMore = (country) => {
    startTransition(() => {
      navigate(`/country/${country.name.common}`);
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4">
        {/* Filter Section */}
        <div className="mb-6 flex gap-4 items-center">
          <Select onValueChange={handleFilterTypeChange} value={filterType}>
            <SelectTrigger className="w-40">
              <span>{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="capital">Capital</SelectItem>
              <SelectItem value="language">Language</SelectItem>
              <SelectItem value="currency">Currency</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="text"
            value={searchQuery}
            onChange={handleFilterChange}
            placeholder={`Search by ${filterType}`}
            className="flex-1"
          />
        </div>

        {/* Country List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCountries.map((country) => (
            <Card key={country.name.common} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img
                  src={country.flags?.[0] || country.flags?.png}
                  alt={`${country.name.common} Flag`}
                  className="w-32 h-20 mx-auto rounded"
                />
                <CardTitle className="text-xl font-bold mt-2">{country.name.common}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Capital:</strong> {country.capital?.[0] || "Not available"}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {Object.values(country.languages || {}).join(", ")}
                </p>
                <p>
                  <strong>Population:</strong> {country.population.toLocaleString()}
                </p>
              </CardContent>
              <CardFooter>
                <button
                  onClick={() => handleSeeMore(country)}
                  className="w-full text-blue-500 hover:text-blue-700 font-medium"
                >
                  See More
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Loading Indicator */}
        {isPending && <p className="text-center text-gray-500 mt-4">Loading...</p>}
        {filteredCountries.length === 0 && !isPending && (
          <p className="text-center text-gray-500 mt-4">No countries found</p>
        )}
      </div>
    </div>
  );
};

export default Country;
