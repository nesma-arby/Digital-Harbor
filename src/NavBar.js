import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    logout() {
        localStorage.removeItem('loggedUser');
    }


    render() {

        const user = JSON.parse(localStorage.getItem('loggedUser'));

        if (user !== null) {

            return (
                <div>


                    <Nav className='menu'>

                        <NavItem>
                            <NavLink tag={Link} to="/Home">Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/myaccount">  My Account  </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink onClick={this.logout} tag={Link} to="/" >  Logout  </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/">Elearning</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/">Videos</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/">How to participate</NavLink>
                        </NavItem>

                    </Nav>





                </div>
            );

        } else {

            return (
                <div>


                    <Nav className='menu'>

                        <NavItem>
                            <NavLink tag={Link} to="/Home">Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/register">  Signup  </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/login">  Login  </NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/">Elearning</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/">Videos</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={Link} to="/">How to participate</NavLink>
                        </NavItem>

                    </Nav>

                </div>
            );

        }


    }
}

export default NavBar;