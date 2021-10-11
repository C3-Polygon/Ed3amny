import "./App.css";

import Stripe from "./components/services/payment/Stripe";
import { Login } from "./components/Auth/login/Login";
import Chat from "./components/services/Chat/chat";
import Process from "./components/services/Chat/process";
import Home from "./components/services/Chat/home";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const socket = io.connect('http://localhost:5000')
function Appmain(props){
  return (
    <>
      <div>
        <Chat 
        username={props.match.params.username} 
        roomname={props.match.params.roomname} 
        socket={socket}/>
      </div>
      <div>
        <Process/>
      </div>
    </>
  )
  
}

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact><Home socket={socket} /></Route>
          <Route path="/chat/:roomname/:username" component={Appmain} />
          <Login/>
          <Stripe />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
