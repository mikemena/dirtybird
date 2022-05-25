import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
import Header from "./components/Header";
import Details from "./components/Details";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
