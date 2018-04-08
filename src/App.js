import React from "react";
import RouterApp from "./router.js";
import configureStore from "./store/configureStore";

const store = configureStore();

const App = () => {
  return <RouterApp store={store} />;
};

export default App;
