import { render } from "react-dom";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Search />
      <h1>Dirty Bird</h1>
      {/* <Item name="Shirt" description="cool shirt" price="$45.00" />
      <Item name="Pants" description="cool pants" price="$70.00" />
      <Item name="Sox" description="cool sox" price="$25.00" /> */}
    </div>
  );
};

render(<App />, document.getElementById("root"));
