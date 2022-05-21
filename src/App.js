const Thing = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Dirty Bird"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Thing),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
