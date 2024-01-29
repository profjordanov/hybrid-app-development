window.onload = () => {
  const rootElement = document.getElementById("root");
  const ints = [1, 2, 3];

  const root = ReactDOM.createRoot(rootElement);

  const childrenElements = ints.map(id => {
    return React.createElement("li", null, id)
  });

  root.render(childrenElements);
};