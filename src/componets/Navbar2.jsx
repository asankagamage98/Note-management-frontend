import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Navbar, NavbarLink } from "flowbite-react";

export default function Navbar2() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const onClickCreate = (e) => {
    navigate(`/create`);
  };
  const onClickHome = (e) => {
    navigate(`/`);
  };
  const onClickAbout = (e) => {
    navigate(`/about`);
  };

  useEffect(() => console.log(currentPath), [currentPath]);

  return (
    <Navbar
      fluid
      className="pe-5 bg-primary fixed top-0 w-full z-50 border-gray-200 dark:bg-primary "
    >
      <Navbar.Brand className="" onClick={onClickHome}>
        <img
          src="/public/note3.svg"
          className="mr-3 h-8 sm:h-9 ps-4"
          alt="Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-normal text-secondary">
          Quick Note
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavbarLink
          onClick={onClickHome}
          className={currentPath == "/" ? "text-secondary" : "text-white"}
        >
          Home
        </NavbarLink>
        <NavbarLink
          onClick={onClickCreate}
          href="#"
          className={currentPath == "/create" ? "text-secondary" : "text-white"}
        >
          Create
        </NavbarLink>
        <NavbarLink
          onClick={onClickAbout}
          className={
            currentPath == "/about" ? "text-secondary" : "text-white"
          }
        >
          About
        </NavbarLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
