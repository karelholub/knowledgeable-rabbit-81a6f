import React from 'react';
import Slider from 'react-slick';
import get from 'lodash/get';
import map from 'lodash/map';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    infinite : true,
    speed : 500,
    slidesToShow : 1,
    autoplay : true,
    autoplaySpeed : 5000,
    pauseOnHover : true,
};

const QuoteCarousel = props => {
    return (
        <section id = {get (props, 'section.section_id')} className = {'wrapper alt ' + get (props, 'section.section_id')}>
            <div id = "quote-carousel">
                <Slider {... settings}>
                    {map(['1','2','3','4','5'], panelNumber => (
                        <div className="panel">
                            <div className="quote">
                                <h3>{'this is quote #${panelNumber}'}</h3>
                                <h5>-Anonymous</h5>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default QuoteCarousel;
