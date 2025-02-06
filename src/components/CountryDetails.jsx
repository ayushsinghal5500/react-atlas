import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getIndiCountryData } from "@/api/DataApi";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const CountryDetails = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        const response = await getIndiCountryData(countryName);
        setCountry(response.data[0]);
      } catch (error) {
        console.error("Error fetching country data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [countryName]);

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <Card className="p-6 shadow-lg">
          <CardHeader className="flex flex-col items-center">
            {/* Go Back Button */}
           
            {/* Country Flag */}
            {loading ? (
              <Skeleton className="w-32 h-20 rounded-md" />
            ) : country.flags?.png ? (
              <img src={country.flags.png} alt={`${country.name.common} Flag`} className="w-32 h-20 rounded-md shadow" />
            ) : (
              <p className="text-sm text-muted-foreground">No flag available</p>
            )}

            {/* Country Name */}
            <CardTitle className="text-3xl mt-4">{loading ? <Skeleton className="w-32 h-6" /> : country.name.common}</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Capital", value: country?.capital?.[0] },
                { label: "Region", value: country?.region },
                { label: "Subregion", value: country?.subregion },
                { label: "Population", value: country?.population?.toLocaleString() },
                { label: "Languages", value: country?.languages ? Object.values(country.languages).join(", ") : null },
                { label: "Currency", value: country?.currencies ? Object.values(country.currencies)[0]?.name : null },
                { label: "TLD (Top-Level Domain)", value: country?.tld?.join(", ") },
                { label: "Borders", value: country?.borders?.join(", ") },
              ].map(({ label, value }, index) => (
                <div key={index} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm font-medium text-muted-foreground">{label}</p>
                  {loading ? <Skeleton className="h-4 w-24 mt-1" /> : <p className="text-lg">{value || "Not available"}</p>}
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="mt-6 flex justify-center">
            <Button onClick={() => navigate(-1)}>⬅ Go Back</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CountryDetails;
