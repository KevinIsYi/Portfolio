import { useRef } from "react";
import { NavLink } from "react-router-dom";

export const SidebarMenu = () => {
    const sidenavRef = useRef(null);

    const openNav = () => {
        sidenavRef.current.style.width = "100%";
    };

    const closeNav = () => {
        sidenavRef.current.style.width = 0;
    };

    return (
        <>
            <i className="sidebar-menu__icon fas fa-bars" onClick={openNav} />
            <div ref={sidenavRef} className="sidebar-menu__sidenav">
                <div className="sidebar-menu__sidenav-close-button" onClick={closeNav}>
                    &times;
                </div>
                <NavLink
                    to="/"
                    exact
                    className="text-center width-100"
                    activeClassName="sidebar-menu__active-link"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/resume"
                    exact
                    className="text-center width-100"
                    activeClassName="sidebar-menu__active-link"
                >
                    Resume
                </NavLink>
                <NavLink
                    to="/projects"
                    exact
                    className="text-center width-100"
                    activeClassName="sidebar-menu__active-link"
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/about"
                    exact
                    className="text-center width-100"
                    activeClassName="sidebar-menu__active-link"
                >
                    About
                </NavLink>
                <NavLink
                    to="/contact"
                    exact
                    className="text-center width-100"
                    activeClassName="sidebar-menu__active-link"
                >
                    Contact
                </NavLink>
            </div>
        </>
    );
};