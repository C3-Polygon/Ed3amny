import "./App.css";

import Stripe from "./components/services/payment/Stripe";
import { Login } from "./components/Auth/login/Login";
import Chat from "./components/services/Chat/chat";
import Process from "./components/services/Chat/process";
import Home from "./components/services/Chat/home";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Auth/signup/signup";
import CreateFundRaiser from "./components/Header/Dropdown/Fundraiser/CreatefundRaiser";
import { useEffect } from "react";
import Section from "./components/section/section";
import Topfundraiser from "./components/TopFundraiser/Topfundraiser";
import Stories from "./components/stories/Stories";
import Leader from "./components/Leader/Leader";
import Random from "./components/Randomfundraisers/Random";
import FundRaiserView from "./components/FundRaiserView/FundRaiserView"
import CategoryByType from "./components/CategoryByType/CategoryByType";
import YourFundraisers from "./components/Header/Dropdown/YourFundraisers/YourFundraisers";
import DonateForSpecific from './components/Header/Dropdown/DonateForSpecific/DonateForSpecific';
import Footer from "./components/Footer/Footer";
import ReadyToStart from "./components/ReadyStart/ReadyToStart";
import AllCategory from "./components/AllCategory/AllCategory";
import CreateBloodPost from "./components/BloodPost/CreateBloodPost";
import MainPage from "./components/DashboradAdmin/MainPage";
import AccountSettings from "./components/Header/Dropdown/AccountSettings/AccountSettings"
import BloodPostView from "./components/BloodPost/BloodPostView"
    // mshan allah
    // mshan allah
const socket = io.connect("http://localhost:5000");
function Appmain(props) {
  return (
    <> 
      <div>
        <Chat
          username={props.match.params.username}
          roomname={props.match.params.roomname}
          socket={socket}
        />
      </div>
      <div>
        <Process />
      </div>
    </>
  );
}

function App() {
  return (
    <>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/">
              {/* <Home socket={socket} /> */}
              <Section/>
            <BloodPostView/>
              <Topfundraiser/>
              <Stories/>
              <Leader/>
              <Random/>
            <ReadyToStart/>
            </Route>
            <AccountSettings exact path ="/Drop/AccountSettings"/>
            <YourFundraisers exact path ="/Drop/YourFundraisers"/>
            <DonateForSpecific exact path ="/Drop/DonateForSpecific"/>
            <Route  exact path="/fundraiser"  component={CreateFundRaiser} />
            <CreateBloodPost exact Path = "/Drop/CreateBloodPost"/>                   
            <Route exact path="/category/:id"  component={CategoryByType}/> 
            <Route exact path="/category/allCategory/Category" component={AllCategory}/>
            <Route path="/chat/:roomname/:username" component={Appmain} />
            <Route  exact path="/fundraiser"  component={CreateFundRaiser} />
            <Route  exact path="/fundraiserView/:id"  component={FundRaiserView} />
            <Route exact path="/adminPage" component={MainPage} />
            {/* <Stripe /> */}
          </Switch>
          
        </div>
        {/* <Footer/> */}
    </>
  );
}

export default App;
