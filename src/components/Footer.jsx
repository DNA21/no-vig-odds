import Toggle from "./Toggle";
import { Container } from "reactstrap";
import { FaInstagram, FaTiktok, FaTwitter, FaFacebookF, FaGithub } from 'react-icons/fa';

const Footer = (props) => {
    const {theme, setTheme} = props;

    const toggleTheme = () => {
        (theme === 'light') ? setTheme('dark') : setTheme('light')
    }

    return (
        <Container className='bgSecondary rounded-4 mt-4'>
            <div className='row pt-4'>
                <div className='col-12 col-md-6'>
                    <div className='d-flex justify-content-evenly text-uppercase'>
                    <div>
                            <h3 className='fs-5'>Sports Odds</h3>
                            <ul className='list-unstyled'>
                                <li>MLB Odds</li>
                                <li>NFL Odds</li>
                                <li>NBA Odds</li>
                                <li>NHL Odds</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='fs-5'>Support</h3>
                            <ul className='list-unstyled fs-6'>
                                <li>Help Center</li>
                                <li>Contact Us</li>
                                <li>API Status</li>
                                <li>Documentation</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className='d-flex flex-column justify-content-md-between align-items-center align-items-md-end mx-md-3'>
                        <div className='py-2'>
                            <Toggle theme={theme} toggleTheme={toggleTheme} />
                        </div>
                        <div className='py-2'>
                            <p>Sign up for Sport Betting Tips!</p>
                        </div>
                        <div className='w-75 py-2'>
                            <form>
                                <div className='input-group'>
                                    <input type='email' class='form-control' placeholder='Enter your email' />
                                    <button className='btn bgButton'>Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className='w-100 py-2 d-flex justify-content-around'>
                            <FaInstagram />
                            <FaTiktok />
                            <FaTwitter />
                            <FaFacebookF />
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-4 pb-2'>
                <p className='text-center'>Powered By No Vig Odds</p>
            </div>
        </Container>
    )
}

export default Footer;
