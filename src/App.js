import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Items from "./components/Items";
import Header from "./components/Header";
import Details from "./components/Details";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
