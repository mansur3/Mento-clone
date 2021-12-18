


import {Switch, Route} from "react-router-dom";
import {Main} from "../Components/landingPage/landingPage";
import {SingleTopicMainPage} from "../Components/singleTopic/SingleTopicMainPage";
import {PlayVideo} from "../Components/singleTopic/playVideo/PlayVideo";
import Navbar from '../Components/Shared_Components/Navbar/Navbar';
import { Footer } from '../Components/Shared_Components/Footer/Footer';
import { Offercart } from "../Components/Pages/Offercardpopup";
import { Certificate } from "../Components/Pages/Certificate";

// import Home from '../Components/Pages/Home';
// import Auth from '../Components/Pages/Auth/Auth';



const Routes = () => {
    return (
        <>
            
            <Switch>

                <Route exact path = "/">
                    
                    <Main />
                </Route>
                <Route exact path = "/singletopic/:id">
                    <SingleTopicMainPage />

                </Route>
                <Route  path = "/playvideo/:videoid/:courseid">
                    <PlayVideo />
                </Route>
                <Route path = "/certificate/:id">
                <Certificate />
                </Route>
            </Switch>
            <Footer></Footer>
        </>
    )
}

export {Routes};

