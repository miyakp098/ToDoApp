import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Box } from "@mui/system";
import Navigation from "./Navigation";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from "../pages/Example";
import Home from "../pages/Home";

function Main() {
    return (
        <Box>
            <Navigation></Navigation>
            <Router>
                <main className={"m-5"}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                    </Switch>
                </main>
            </Router>
        </Box>
    );
}

export default Main;
// for <div id="main-employee"></div>
ReactDOM.render(<Main />, document.getElementById("app"));
