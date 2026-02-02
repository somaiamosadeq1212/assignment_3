import { Search, X } from "lucide-react";

export default function SearchBar({
  search,
  setSearch,
  region,
  setRegion,
}) {
  const hasText = search.trim().length > 0;

  return (
    <div className="glass p-3 rounded-3">
      <div className="row g-2">
        {/* Search Input */}
        <div className="col-12 col-md-8">
          <div className="input-group">
            <span className="input-group-text bg-transparent border-0">
              <Search size={18} />
            </span>

            <input
              type="text"
              className="form-control bg-transparent border-0"
              placeholder="Search country..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {hasText && (
              <button
                className="btn btn-sm btn-soft"
                type="button"
                onClick={() => setSearch("")}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Region Dropdown */}
        <div className="col-12 col-md-4">
          <select
            className="form-select bg-transparent"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="all">All Regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
}
