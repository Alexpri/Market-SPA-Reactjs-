import React, { PropTypes } from 'react'


function BannerItem (props) {
    const { url, title, text } = props.info
    const styleImg = {
        backgroundImage: 'url(' + url + ')'
    }

    return (
       <div className="hero-banner">
            <div className="hero-banner_item" style={styleImg}>
                <div className="item-info-wrapper">
                    <div className="item-info">
                        <div className="item-info-box">
                            <div className="item-info-box-holder">
                                <div className="item-info-box-content">
                                    <h3>{title}</h3>
                                    <p>{text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerItem