import { useState, useEffect } from "react";

const ITEMS = ["Asic", "Immersion"];

const Search = () => {
  const [location, setLocation] = useState("");
  const [item, setItem] = useState("");
  console.log(location);

  // Fetch Items
  const fetchItems = async () => {
    const res = await fetch(`http://localhost:3001/items`);
    const items = await res.json();
    return items;
  };

  useEffect(() => {
    requestItems;
  });

  return (
    <div className="search-params">
      <form>
        {/* <label htmlFor="location">
          Location {location}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label> */}
        <label htmlFor="item">
          item
          <select
            id="item"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
            onBlur={(e) => {
              setItem(e.target.value);
            }}
          >
            <option />
            {ITEMS.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Search;
