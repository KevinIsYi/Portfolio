import { useRef } from "react";
import { Link } from "react-router-dom";

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
            <i className="sidebar-menu__icon fas fa-bars" onClick={openNav}/>
            <div ref={sidenavRef} className="sidebar-menu__sidenav">
                <div className="sidebar-menu__sidenav-close-button" onClick={closeNav}>
                    &times;
                </div>
                <Link to="/resume" onClick={closeNav}>Resume</Link>
                <Link to="/projects" onClick={closeNav}>Projects</Link>
                <Link to="/about" onClick={closeNav}>About</Link>
                <Link to="/contact" onClick={closeNav}>Contact</Link>
            </div>
        </>
    );
};