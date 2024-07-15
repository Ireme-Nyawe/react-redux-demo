import { useState } from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import { HooksCakeContainer } from "./components/HooksCakeContainer";
import IceContainer from "./components/IceContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={Store}>
      <CakeContainer />
      <HooksCakeContainer></HooksCakeContainer>
      <IceContainer></IceContainer>
      <NewCakeContainer></NewCakeContainer>
      <UserContainer></UserContainer>
    </Provider>
  );
}

export default App;
