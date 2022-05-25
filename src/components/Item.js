import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/details/${id}`}>
        <h1>{props.name}</h1>
      </Link>
      <h2>{props.description}</h2>
      <h2>{props.price}</h2>
    </div>
  );
};

export default Item;
