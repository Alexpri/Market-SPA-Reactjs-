import React, { Component, PropTypes } from 'react'
import MenuItems from './MenuItems'

class Header extends Component {

    render() {
        
        return (
            <header className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <h4>ReactJS</h4>
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".bs-navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <nav className="collapse navbar-collapse bs-navbar-collapse">
                        <MenuItems/>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header