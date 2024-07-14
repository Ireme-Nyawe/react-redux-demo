import { useState } from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { HooksCakeContainer } from "./components/HooksCakeContainer";
import IceContainer from "./components/IceContainer";

function App() {
  return (
    <Provider store={Store}>
      <CakeContainer />
      <HooksCakeContainer></HooksCakeContainer>
      <IceContainer></IceContainer>
    </Provider>
  );
}

export default App;
