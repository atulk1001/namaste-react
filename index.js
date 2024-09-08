import React from "react";
import ReactDOM from "react-dom/client";
//React.createElement => Object
const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
//JSX -HTML/XML Like Syntax, transpiled before reached to JS engine , Parcel does this using Babel
const JsxHeading = <h1 id="heading"> Namste React using JSX</h1>;
const TitleComponent = () => <h1>Namaste React</h1>
let listOfComponents = [];
const Jscript = () => {
    for(let i= 0; i<5;i++) {
        listOfComponents.push(<TitleComponent />)
    }
    return listOfComponents;
};
const HeadingComponent = () => {
  console.log(`listOfComponents`,listOfComponents.length);
  return (
    <div id="container">
        {[<TitleComponent />,JsxHeading]}
        <Jscript />
        {listOfComponents}
      <h1>Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
