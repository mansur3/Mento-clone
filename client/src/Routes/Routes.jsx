


import {Switch, Route} from "react-router-dom";
import {Main} from "../Components/landingPage/landingPage";
import {SingleTopicMainPage} from "../Components/singleTopic/SingleTopicMainPage";
import {PlayVideo} from "../Components/singleTopic/playVideo/PlayVideo";
import Navbar from '../Components/Shared_Components/Navbar/Navbar';
import { Footer } from '../Components/Shared_Components/Footer/Footer';

// import Home from '../Components/Pages/Home';
// import Auth from '../Components/Pages/Auth/Auth';



const Routes = () => {
    return (
        <>
        
            <Switch>

                <Route exact path = "/">
                    <Navbar></Navbar>
                    <Main />
                </Route>
                <Route exact path = "/singletopic/:id">
                    <SingleTopicMainPage />

                </Route>
                <Route exact path = "/playvideo/:videoid/:courseid">
                    <PlayVideo />
                </Route>
            </Switch>
            <Footer></Footer>
        </>
    )
}

export {Routes};
