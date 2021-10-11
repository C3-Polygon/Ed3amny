import "./App.css";

import Stripe from "./components/services/payment/Stripe";
import { Login } from "./components/Auth/login/Login";

function App() {
  return (
    <>
      <div className="App"></div>
      <Login/>
      <Stripe />
    </>
  );
}

export default App;
