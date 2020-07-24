import React, { Component } from "react";
import {
    Navbar, NavbarBrand
} from 'reactstrap';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="md">
                    <NavbarBrand className="mr-auto" href="/"><img src="/assets/images/logo.png" height="70" width="70" alt="Logo" /></NavbarBrand>

                </Navbar>


                <div className="jumbotron text-center">
                    <h1>Your Bridge Between Western and Asian Makeup</h1>
                    
                </div>
            </React.Fragment>

        );
    }
}

export default Header;