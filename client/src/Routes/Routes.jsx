import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from '../Components/Shared_Components/Navbar/Navbar';
import { Footer } from '../Components/Shared_Components/Footer/Footer';
import Home from '../Components/Pages/Home';
import Auth from '../Components/Pages/Auth/Auth';
import { Home_Component } from '../Components/Pages/Home_Page_Component';

const Routes = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/">
                    <Home_Component></Home_Component>
                </Route>
            </Switch>
            <Footer></Footer>
        </div>
    )
}

export default Routes
