const mydiv = React.createElement(
    "div",
    {class: "myclass"},
    React.createElement("h1", {class: "myclass2"}, "Hello React")
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(mydiv);