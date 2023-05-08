import mlbLogo from '../img/MLB_Logo.png'
import nflLogo from '../img/NFL_Logo.png'
import nbaLogo from '../img/NBA_Logo.png'
import nhlLogo from '../img/NHL_Logo.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'

const Carousel = () => {
    const settings = {
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '100px',
        slidesToShow: 2,
        speed: 500
    }

    return (
            <Slider {...settings} className='w-75'>
                <div>
                    <Link to='mlb'><img src={mlbLogo} style={{ height: 100 + 'px', width: 100 + 'px' }} alt="/" /></Link>
                </div>
                <div>
                    <Link to='nba'><img src={nbaLogo} style={{ height: 100 + 'px' }} alt="/" /></Link>
                </div>
                <div>
                    <Link to='nfl'><img src={nflLogo} style={{ height: 100 + 'px' }} alt="/" /></Link>
                </div>
                <div>
                    <Link to='nhl'><img src={nhlLogo} style={{ height: 100 + 'px' }} alt="/" /></Link>
                </div>
            </Slider>
    )
}

export default Carousel;
