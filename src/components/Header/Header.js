import { Link, NavLink } from 'react-router-dom';

export const Header = () => {

    return (
        <header className="header__container flex roboto bold">
            <Link to="/" className="header__name text-center lobster gray-text">Kevin Rodríguez</Link>
            <nav className="header__nav">
                <NavLink to="/resume" exact activeClassName="active-link">Resumé</NavLink>
                <NavLink to="/projects" exact activeClassName="active-link">Projects</NavLink>
                <NavLink to="/about" exact activeClassName="active-link">About</NavLink>
                <NavLink to="/contact" exact activeClassName="active-link">Contact</NavLink>
            </nav> 
        </header>
    )
}
