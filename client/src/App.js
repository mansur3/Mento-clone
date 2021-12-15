import { Footer } from './Components/Shared_Components/Footer/Footer';
import { Home_Component } from './Components/Pages/Home_Page_Component';
import { Offercart } from './Components/Pages/Offercardpopup';

import './App.css';
import Auth from './Components/Pages/Auth/Auth';


function App() {
  return (
    <div className="App">
        <Auth 
        head="Welcome Back!"
        subhead="LOGIN WITH"
        bottomText1="Not a member yet ?"
        bottomText2="SIGN UP"
        ></Auth>
        <Auth 
        head="Join Us!"
        subhead="SIGN UP WITH"
        bottomText1="Are you already a member ?"
        bottomText2="LOG IN"
        ></Auth>
     
        <Footer></Footer>
     
     
    </div>
  );
}

export default App;
