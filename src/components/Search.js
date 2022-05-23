import { useState } from "react";

const Search = () => {
  const [location, setLocation] = useState("");
  console.log(location);
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location {location}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
