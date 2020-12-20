import React from 'react';
import FormAddCity from "../containers/FormAddCity";
import AllTrack from "../containers/AllCity";
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
const SearchCity = () => {
    return (
        <section className="sect_weather">
            <div className="sect_weather__content">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <FormAddCity/>
                            <AllTrack/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </section>
    );
};

export default SearchCity;