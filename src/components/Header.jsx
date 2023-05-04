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
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <Container>
            <Navbar>
                <NavbarBrand>
                    <h1>No Vig</h1>
                </NavbarBrand>

                <NavbarToggler />
                <Collapse>
                    <Nav>
                        <NavItem>
                            <NavLink>MLB</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>NBA</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>NFL</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>NHL</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    )
}

export default Header
