import mlbLogo from '../img/MLB_Logo.png'
import nflLogo from '../img/NFL_Logo.png'
import nbaLogo from '../img/NBA_Logo.png'
import nhlLogo from '../img/NHL_Logo.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

const Carousel = () => {
    let settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '100px',
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    }

    return (
            <Slider {...settings} className='col-10 col-md-9'>
                <div>
                    <Link to='mlb'><img src={mlbLogo} style={{ height: 150 + 'px', width: 150 + 'px' }} alt="/" /></Link>
                </div>
                <div>
                    <Link to='nba'><img src={nbaLogo} style={{ height: 150 + 'px' }} alt="/" /></Link>
                </div>
                <div>
                    <Link to='nfl'><img src={nflLogo} style={{ height: 150 + 'px' }} alt="/" /></Link>
                </div>
                <div>
                    <Link to='nhl'><img src={nhlLogo} style={{ height: 150 + 'px' }} alt="/" /></Link>
                </div>
            </Slider>
    )
}

export default Carousel;
