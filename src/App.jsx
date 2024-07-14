import { useState } from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { HooksCakeContainer } from "./components/HooksCakeContainer";

function App() {
  return (
    <Provider store={Store}>
   <HooksCakeContainer></HooksCakeContainer>
      <CakeContainer />
    </Provider>
  );
}

export default App;
