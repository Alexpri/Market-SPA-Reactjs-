import React, { Component, PropTypes } from 'react'
import Slider from 'react-slick'
import { connect } from 'react-redux'
import { loadSliderInfo } from '../AC/sliderblock'
import SliderItem from '../components/SliderItem'

class SliderBlock extends Component {
    static propTypes = {

    };

    componentDidMount() {
        const { loadSliderInfo, loaded, loading } = this.props
        console.log(loadSliderInfo, loaded, loading)
        if (!loaded && !loading) loadSliderInfo()
    }

    render() {
        const { loading, loaded, sliderblockObject } = this.props
        console.log(sliderblockObject.toJS())
        if (!loaded && loading) return <h3>Loading...</h3>
        if (!sliderblockObject) return null

        const sliderContent = sliderblockObject.map((item) => <div key={console.log(item.id)}>
                <SliderItem info={item} />
            </div>)

        const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                draggable: false,
                autoplay: true,
                fade: true
            }
        return (
            <div className="hero-banner">
                <Slider {...settings}>
                    { sliderContent }
                </Slider>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        loading: state.sliderblock.get('loading'),
        loaded: state.sliderblock.get('loaded'),
        sliderblockObject: state.sliderblock.get('entities').valueSeq()
    }
}, {
    loadSliderInfo
})(SliderBlock)