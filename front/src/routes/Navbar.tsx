import React from "react";
import "./Navbar.css";
import { Link, NavLink, Outlet } from "react-router";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <header className="nav__header">
                <nav className="navbar">
                    <NavLink
                        to={"/"}
                        className="nav__logo"
                        onClick={closeMenu}
                    >
                        User
                    </NavLink>

                    {/* NAV MENU BUTTON */}
                    <button 
                        className="nav__button"
                        type="button"
                        aria-label="toggle"
                        aria-expanded={open}
                        onClick={handleClick}
                    >
                        <aside className={`
                            nav__burger ${open ? "open" : ""}
                        `}>
                            <span className="nav__line" />
                            <span className="nav__line" />
                            <span className="nav__line" />
                        </aside>
                    </button>

                    {/* SIDEBAR AND CONTAINER QUERIES */}
                    <menu className={open ? 
                        "nav__menu active" : 
                        "nav__menu"
                    }>
                        <li className="nav__item">
                            <Link
                                to={"/login"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                Login
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={"/dash"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                Dash
                            </Link>
                        </li>
                        <li className="nav__item">
                            <Link
                                to={"/users"}
                                className="nav__links"
                                onClick={closeMenu}
                            >
                                Users
                            </Link>
                        </li>
                    </menu>
                </nav>
            </header>
            <Outlet />
        </React.Fragment>
    );
};


