import { Link, NavLink } from 'react-router-dom';
import { SidebarMenu } from '../../SidebarMenu/SidebarMenu';

export const Header = () => {

    return (
        <header className="header__container flex roboto bold">
            <Link to="/" className="header__name text-center lobster gray-text">Kevin Rodríguez</Link>
            <nav className="header__nav hidden">
                <NavLink to="/resume" exact activeClassName="active-link">Resume</NavLink>
                <NavLink to="/projects" exact activeClassName="active-link">Projects</NavLink>
                <NavLink to="/about" exact activeClassName="active-link">About</NavLink>
                <NavLink to="/contact" exact activeClassName="active-link">Contact</NavLink>
            </nav> 
            <SidebarMenu />
        </header>
    )
}
