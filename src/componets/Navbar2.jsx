import React from 'react'
import { useNavigate} from 'react-router-dom';

import { Navbar ,NavbarLink} from 'flowbite-react';

export default function Navbar2() {

    const navigate = useNavigate();

    const  onClickCreate =(e) => {
        navigate(`/create`)
    }
    const  onClickHome =(e) => {
      navigate(`/`)
    }
    const  onClickCont =(e) => {
      navigate(`/contacts`)
    }
   
  return (
    <Navbar fluid className='pe-5 bg-gray-900 fixed top-0 w-full z-50 border-gray-200 dark:bg-gray-900 ' >
      <Navbar.Brand className=''>
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8 sm:h-9 ps-4" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">NMS</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavbarLink  onClick={onClickHome} active>
          Home
        </NavbarLink>
        <NavbarLink  onClick={onClickCreate} href="#">
          Create
        </NavbarLink>
        <NavbarLink onClick={onClickCont}>Contact</NavbarLink>
      </Navbar.Collapse>
    </Navbar>
  )
}
