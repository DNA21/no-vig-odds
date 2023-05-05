import { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container
} from 'reactstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import Toggle from './Toggle'

const Header = (props) => {
    const {theme, setTheme} = props

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleTheme = () => {
        (theme === 'light') ? setTheme('dark') : setTheme('light')
    }

    return (
        <Container className='px-0'>
            <Navbar className={`${(theme==='dark') ? 'navbar-dark' : 'navbar-light'} d-flex justify-content-between align-items-center shadow-lg rounded-4 mt-4 fw-bold bgSecondary`} expand='md' sticky='top'>
                <NavLink to='/' className='text-link' onClick={() => setMenuOpen(false)}>
                    <h1>No&nbsp;Vig</h1>
                </NavLink>

                <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                <Collapse isOpen={menuOpen} navbar className={`${menuOpen ? 'nav-collapse bgSecondary' : ''} container`}>
                    <Nav className={`${(menuOpen===false) ? 'ms-auto d-flex align-items-center' : null} `} navbar>
                        <NavItem className={`${menuOpen===false ? null : 'py-4' }`}>
                            <Toggle theme={theme} toggleTheme={toggleTheme} />
                        </NavItem>
                        <NavItem>
                            <NavLink to='/mlb' onClick={() => setMenuOpen(false)} className={`${(menuOpen===false) ? 'text-link px-4 bgButtonSecondary py-2 rounded-5 shadow-lg mx-2' : 'nav-link border-bottom py-5'}`}>MLB</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/nba' onClick={() => setMenuOpen(false)} className={`${(menuOpen===false) ? 'text-link px-4 bgButtonSecondary py-2 rounded-5 shadow-lg mx-2' : 'nav-link border-bottom py-5'}`}>NBA</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/nfl' onClick={() => setMenuOpen(false)} className={`${(menuOpen===false) ? 'text-link px-4 bgButtonSecondary py-2 rounded-5 shadow-lg mx-2' : 'nav-link border-bottom py-5'}`}>NFL</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/nhl' onClick={() => setMenuOpen(false)} className={`${(menuOpen===false) ? 'text-link px-4 bgButtonSecondary py-2 rounded-5 shadow-lg mx-2' : 'nav-link py-5'}`}>NHL</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    )
}

export default Header
