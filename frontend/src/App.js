import "./App.css";
import { Login } from "./components/Auth/login/Login";
import Home from "./components/services/Chat/home";
import io from "socket.io-client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/Auth/signup/signup";
import CreateFundRaiser from "./components/Header/Dropdown/Fundraiser/CreatefundRaiser";
import { React} from "react";
import Section from "./components/section/section";
import Topfundraiser from "./components/TopFundraiser/Topfundraiser";
import Stories from "./components/stories/Stories";
import Leader from "./components/Leader/Leader";
import Random from "./components/Randomfundraisers/Random";
import FundRaiserView from "./components/FundRaiserView/FundRaiserView";
import CategoryByType from "./components/CategoryByType/CategoryByType";
import Footer from "./components/Footer/Footer";
import ReadyToStart from "./components/ReadyStart/ReadyToStart";
import AllCategory from "./components/AllCategory/AllCategory";
import CreateBloodPost from "./components/BloodPost/CreateBloodPost";
import MainPage from "./components/DashboradAdmin/MainPage";
import BloodPostView from "./components/BloodPost/BloodPostView";
import Donation from "./components/services/payment/Donation";
import { GetAllFundraiser } from "./components/GetAllFundraiser/GetAllFundraiser";
import AccountSettings from "./components/Header/Dropdown/AccountSettings/AccountSettings";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { EditFundraiser } from "./components/Header/Dropdown/YourFundraisers/EditFundraiser";
import YourContributions from "./components/Header/Dropdown/YourContributions/YourContributions";
import { SearchResults } from "./components/Header/Search/SearchResults";
import AboutUs from './components/Aboutus/AboutUs';
import YourFundraisers from './components/Header/Dropdown/YourFundraisers/YourFundraisers';
import ForgotMainPage from "./components/services/ForgotPassword/ForgotMain/ForgotMain";
import Navigationbar from "./Navigationbar/Navigationbar"; // navbar
// import Chat from "./components/services/Chat/chat";
// import Navbar from "./components/Navbar/Navbar";
// import Process from "./components/services/Chat/process";
// import { BsFillChatRightTextFill } from "react-icons/bs";
// import axios from "axios";
import DonateForSpecific from './components/Header/Dropdown/DonateForSpecific/DonateForSpecific';

const socket = io.connect("http://localhost:5000");

let userIdSave = localStorage.getItem("CurrentUserId");
// console.log(userIdSave,"userIdSave")
let x = "";

socket.on("notificationtarget",(data)=>{
  // console.log("frontend notification")
  // console.log(data,"notification data")
  // console.log(data.owner,"owner")
  x=data.text
  if (data.owner == userIdSave){
    notify()
  }
})
const notify = () => toast(x)


// function Appmain(props) {
//   return (
//     <>
//       <div>
//         <Chat
//           username={props.match.params.username}
//           roomname={props.match.params.roomname}
//           socket={socket}
//         />
//       </div>
//     </>
//   );
// }

function App() {
  // let tokenSave = localStorage.getItem("token");
 

  return (
    <>
     <ToastContainer />
    <Navigationbar/>
    
      {/* <Navbar /> */}
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          {/* if is logged in or token available history.push /  you should not enter signup while u have token or isslogged in up to */}
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/">
            <Home socket={socket} />
            <Section />
            <BloodPostView />
            <Topfundraiser />
            <Stories />
            <Leader />
            <Random />
            <AboutUs/>
            <ReadyToStart />
           
          </Route>
          <AccountSettings exact path="/Drop/AccountSettings" />
          <YourFundraisers exact path="/Drop/YourFundraisers" />
          <DonateForSpecific exact path="/Drop/DonateForSpecific" />
          <Route exact path="/fundraiser" component={CreateFundRaiser} />
          <Route exact path="/category/:id" component={CategoryByType} />
          <Route exact path="/category/allCategory/Category" component={AllCategory}/>
          <Route exact path="/fundraiser" component={CreateFundRaiser} />
          {/* <Route exact path="/chat/:roomname/:username" component={Appmain} /> */}
          <Route exact path="/fundraiserView/:id" component={FundRaiserView} />
          <Route exact path="/admin" component={MainPage} />
          {/* <Route exact path="/admin/createstory" component={AddStory} /> */}
          <Route exact path="/donation" component={Donation} />
          <Route exact path="/allfundraiser" component={GetAllFundraiser} />
          <Route exact path="/edityourfundraiser/:id" component={EditFundraiser} />
          <Route exact path="/Contributions/Contributions/Contributions/Contributions" component={YourContributions}/>
           {/* <yourDonations exact Path = "/Contributions/Contributions/Contributions/Contributions"/>                   */}
          
          <Route exact path = "/search" component={SearchResults}/>
          <Route exact path="/ForgotMainPage" component={ForgotMainPage}/>
          <Route exact Path = "/Drop/Blood/BloodPost/Create" component={CreateBloodPost}/> 
          <Route exact path ="*" render={()=>'not found'}/>
        </Switch>
      </div>
     
      {/* <Footer /> */}
    </>
  );
}

export default App;
