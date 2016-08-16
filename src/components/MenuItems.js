import React, { Component, PropTypes } from 'react'
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'

class MenuItems extends Component {

    render() {
        
        return (
            <Nav className="menu-items nav navbar-nav navbar-right">
                <LinkContainer to="/">
                    <NavItem>
                        Home
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/about-us">
                    <NavItem>
                        About Us
                    </NavItem>
                </LinkContainer>
                <NavDropdown eventKey="3" title="Services" id="nav-dropdown">
                    <MenuItem href="product" eventKey="3.1">
                        Content 1
                    </MenuItem>
                    <MenuItem href="product" eventKey="3.2">
                        Content 2
                    </MenuItem>
                    <MenuItem href="product" eventKey="3.3">
                        Content 3
                    </MenuItem>
                    </NavDropdown>
                    <LinkContainer to="/contact-us">
                    <NavItem>
                        Contact Us
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/news">
                    <NavItem>
                        News
                    </NavItem>
                </LinkContainer>
            </Nav>
        )
    }
}

export default MenuItems