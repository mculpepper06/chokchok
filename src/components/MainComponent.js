
import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ShadeFinder from './ShadeComponent';
import About from './AboutComponent';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/shades' component={ShadeFinder} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;