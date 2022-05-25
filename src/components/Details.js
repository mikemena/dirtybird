import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const [item, setItem] = useState([]);
  // console.log(location);

  useEffect(() => {
    requestItem();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestItem() {
    const res = await fetch(`http://localhost:3001/items/${id}`);
    const item = await res.json();
    setItem(item);
    console.log(item);
  }

  const { id } = useParams();
  return (
    <div>
      <h2>{id}</h2>
      <Link to="/">
        <p>back</p>
        <p>{`${item.name}-${item.material}-${item.details}-${item.price}`}</p>
      </Link>
    </div>
  );
};

export default Details;
