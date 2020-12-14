import React from "react";
import Home from "./components/Home";
import "./App.css";
import { GlobalStyles } from "./components/GlobalStyles";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/", "/games/:id"]}>
        <Home />
      </Route>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getGaemsz: dispatch(gameActionCreator()),
//   };
// };

export default App;
