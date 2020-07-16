import React from 'react';
import { Jumbotron,Navbar,Nav,NavItem } from 'reactstrap';
import {NavLink} from 'react-router-dom';

const Header = (props) =>{


    return(
        <React.Fragment>
            <Jumbotron fluid>
                <h1 className="text-lg-center">CHOKCHOK</h1>
            </Jumbotron>
            <Navbar sticky="top" expand="md">
                <div className="container">
                    
                   <Nav navbar>
                   <NavItem>
                        <NavLink className="nav-link" to="/home">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/trending">TRENDING</NavLink>
                        </NavItem>
                        
                        <NavItem>
                            <NavLink className="nav-link" to="/shadefinder">SHADES</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to="/shop">SHOP</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </Navbar> 
                 
        </React.Fragment>
    );
}



export default Header;