import React from 'react';

import {
  Navbar,
  NavbarLink,
} from 'flowbite-react';
import {
  useLocation,
  useNavigate,
} from 'react-router-dom';

export default function TopNavbar() {
    const navigate = useNavigate()

    // access current path name
    const location = useLocation()
    const currentPath = location.pathname

    // programmatic navigation
    const onClickCreate = (e) => {
        navigate(`/create`)
    }
    const onClickHome = (e) => {
        navigate(`/`)
    }
    const onClickAbout = (e) => {
        navigate(`/about`)
    }

    return (
        <Navbar
            fluid
            className="pe-5 bg-primary fixed top-0 w-full z-50 border-gray-200 dark:bg-primary "
        >
            <Navbar.Brand className="" onClick={onClickHome}>
                <img src="/public/note3.svg" className="mr-3 h-8 sm:h-9 ps-4" alt="Logo" />
                <span className="self-center whitespace-nowrap text-xl font-normal text-secondary">
                    Quick Note
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <NavbarLink
                    onClick={onClickHome}
                    className={currentPath == '/' ? 'text-secondary' : 'text-white'}
                >
                    Home
                </NavbarLink>
                <NavbarLink
                    onClick={onClickCreate}
                    href="#"
                    className={currentPath == '/create' ? 'text-secondary' : 'text-white'}
                >
                    Create
                </NavbarLink>
                <NavbarLink
                    onClick={onClickAbout}
                    className={currentPath == '/about' ? 'text-secondary' : 'text-white'}
                >
                    About
                </NavbarLink>
            </Navbar.Collapse>
        </Navbar>
    )
}
