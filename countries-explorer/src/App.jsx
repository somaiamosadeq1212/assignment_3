import { useEffect, useState } from "react";
import { Globe } from "lucide-react";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import SkeletonGrid from "./components/SkeletonGrid";

function App() {
  // ======= States =======
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("all");

  const [debouncedSearch, setDebouncedSearch] = useState("");

  // ======= Debounce Search =======
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // ======= Fetch Countries =======
  useEffect(() => {
    const controller = new AbortController();

    async function fetchCountries() {
      try {
        setLoading(true);
        setError(null);

        const FIELDS = "name,flags,region,population,cca3";

        let url = `https://restcountries.com/v3.1/all?fields=${FIELDS}`;

        if (debouncedSearch.length >= 2) {
          url = `https://restcountries.com/v3.1/name/${debouncedSearch}?fields=${FIELDS}`;
        } else if (region !== "all") {
          url = `https://restcountries.com/v3.1/region/${region}?fields=${FIELDS}`;
        }

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("No countries found");
        }

        const data = await response.json();

        // Sort by population (Bonus)
        const sorted = [...data].sort(
          (a, b) => (b.population || 0) - (a.population || 0)
        );

        setCountries(sorted);
      } catch (err) {
        if (err.name === "AbortError") return;

        if (!navigator.onLine) {
          setError("No internet connection");
        } else {
          setError("Failed to fetch countries");
        }

        setCountries([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCountries();

    return () => controller.abort();
  }, [debouncedSearch, region]);

  // ======= JSX =======
  return (
    <div className="py-4 py-sm-5">
      <div className="container">
        {/* Header */}
        <div className="glass rounded-4 p-3 p-sm-4 mb-4">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div className="brand-badge glass">
              <Globe size={24} />
            </div>
            <div>
              <h1 className="h3 mb-0">Countries Explorer</h1>
              <div className="muted small">
                Search and filter countries
              </div>
            </div>
          </div>

          <SearchBar
            search={search}
            setSearch={setSearch}
            region={region}
            setRegion={setRegion}
          />
        </div>

        {/* Loading */}
        {loading && <SkeletonGrid />}

        {/* Error */}
        {!loading && error && (
          <div className="text-center mt-4">
            <p>Error: {error}</p>
            <button
              className="btn btn-soft"
              onClick={() => {
                setSearch("");
                setRegion("all");
              }}
            >
              Retry
            </button>
          </div>
        )}

        {/* Countries */}
        {!loading && !error && (
          <CountryList countries={countries} />
        )}
      </div>
    </div>
  );
}

export default App;