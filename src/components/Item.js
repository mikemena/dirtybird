import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link to={`/details/${id}`}>
      <div className="item">
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
        <h2>{props.price}</h2>
      </div>
    </Link>
  );
};

export default Item;
