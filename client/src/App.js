import logo from './logo.svg';
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
    </div>
  );
}

export default App;
