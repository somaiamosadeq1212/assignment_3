import CountryCard from "./CountryCard";
import SkeletonGrid from "./SkeletonGrid";

export default function CountryList({ countries, loading }) {
  if (loading) {
    return <SkeletonGrid />;
  }

  if (!countries || countries.length === 0) {
    return (
      <p className="text-center muted mt-4">
        No countries found.
      </p>
    );
  }

  return (
    <div className="row g-3 g-md-4">
      {countries.map((country) => (
        <div
          className="col-12 col-sm-6 col-lg-4"
          key={country.cca3}
        >
          <CountryCard country={country} />
        </div>
      ))}
    </div>
  );
}