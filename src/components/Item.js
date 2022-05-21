const Item = (props) => {
  return (
    <div className="item">
      <h1>{props.name}</h1>
      <h2>{props.description}</h2>
      <h2>{props.price}</h2>
    </div>
  );
};

export default Item;
