import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from '../Components/Shared_Components/Navbar/Navbar';
import { Footer } from '../Components/Shared_Components/Footer/Footer';
import Home from '../Components/Pages/Home';
import Auth from '../Components/Pages/Auth/Auth';
import { Offercart } from '../Components/Pages/Offercardpopup';

const Routes = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                    {/* Its a DUmmy Home Component */}
                </Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default Routes
