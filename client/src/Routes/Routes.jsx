

import {Switch, Route} from "react-router-dom";
import {Main} from "../Components/landingPage/landingPage";
import {SingleTopicMainPage} from "../Components/singleTopic/SingleTopicMainPage";


const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path = "/">
                    <Main />
                </Route>
                <Route path = "/singletopic/:id">
                    <SingleTopicMainPage />
                </Route>
            </Switch>
        </>
    )
}

export {Routes};