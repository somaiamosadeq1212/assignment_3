export default function CountryCard({ country }) {
  const flag =
    country?.flags?.png ||
    country?.flags?.svg ||
    "https://via.placeholder.com/320x200?text=No+Flag";

  const name = country?.name?.common || "Unknown country";
  const region = country?.region || "—";
  const population = country?.population
    ? country.population.toLocaleString()
    : "—";

  return (
    <article className="glass country-card h-100 p-3">
      <img
        src={flag}
        alt={`${name} flag`}
        className="img-fluid rounded-3 mb-3"
        loading="lazy"
      />

      <h3 className="h5 mb-2">{name}</h3>

      <p className="mb-1">
        <strong>Region:</strong> {region}
      </p>

      <p className="mb-0">
        <strong>Population:</strong> {population}
      </p>
    </article>
  );
}