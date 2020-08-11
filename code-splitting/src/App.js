import React, { useState } from "react";
import "./App.css";
import Page1 from "./components/Page1";
// import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";

const App = () => {
  const [state, setState] = useState({
    route: "page1",
    component: "",
  });

  const onRouteChange = (route) => {
    // no code splitting:
    // setState({ route });
    // with code splitting
    if (route === "page1") {
      setState({ route });
    } else if (route === "page2") {
      import("./components/Page2").then((Page2) => {
        setState({ route, component: Page2.default });
      });
    } else if (route === "page3") {
      import("./components/Page3").then((Page3) => {
        setState({ route, component: Page3.default });
      });
    }
  };

  return (
    // no code splitting
    // <div className="App">
    //   {route === "page1" ? (
    //     <Page1 onRouteChange={onRouteChange} />
    //   ) : route === "page2" ? (
    //     <Page2 onRouteChange={onRouteChange} />
    //   ) : (
    //     route === "page3" && <Page3 onRouteChange={onRouteChange} />
    //   )}
    // </div>
    // code splitting
    <div className="App">
      {state.route === "page1" ? (
        <Page1 onRouteChange={onRouteChange} />
      ) : (
        <state.component onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
