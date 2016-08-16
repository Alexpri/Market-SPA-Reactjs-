import React, { Component, PropTypes } from 'react'
import Banner from './Banner'
import SliderBlock from './SliderBlock'

class Homepage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="homepage main">
                <Banner />
                <SliderBlock />
            </div>
        )
    }
}

export default Homepage