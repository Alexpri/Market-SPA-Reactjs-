import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadBanner } from '../AC/banner'
import BannerItem from '../components/BannerItem'

class TopBanner extends Component {
    static propTypes = {

    };

    componentDidMount() {
        const { loading, loaded, loadBanner } = this.props
        if (!loaded && !loading) loadBanner()
    }

    render() {
        const { loading, loaded, bannerObject } = this.props
        if (!loaded && loading) return <h3>Loading...</h3>
        if (!bannerObject) return <div>asda</div>

        const content = <BannerItem info={bannerObject} />
        
        return (
            <div className="hero-banner">
                {content}                
            </div>
        )
    }
}

export default connect((state) => {
    return {
        loading: state.banner.get('loading'),
        loaded: state.banner.get('loaded'),
        bannerObject: state.banner.getIn(['entities', 1])
    }
}, {
    loadBanner
})(TopBanner)