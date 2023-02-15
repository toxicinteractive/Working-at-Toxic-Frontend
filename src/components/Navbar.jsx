import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const nav_links = [
  {
    id: 1,
    title: "Movies",
    href: "/",
  },

  {
    id: 2,
    title: "TV Shows",
    href: "/tv-shows",
  },
  {
    id: 3,
    title: "Search",
    href: "/search",
  },
];

export default function UpperNavbar() {
  const params = useLocation();
  const currentPath = params.pathname;

  return (
    <Navbar
      className='navbar'
      expand='lg'
      style={{ position: "sticky", height: "fit-content", top: 0, zIndex: 2 }}
    >
      <Container className='d-flex'>
        <Navbar.Brand
          style={{ fontSize: "2em", color: "white", fontWeight: "bold" }}
          className='mr-auto p-2'
          href=''
        >
          TMDB
        </Navbar.Brand>

        <Navbar.Toggle
          style={{ background: "white" }}
          aria-controls='navbarScroll'
        />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0  gap-3 p-2'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {nav_links.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                style={{
                  fontSize: "1.2em",
                  color: currentPath === item.href ? "white" : "#bdc0bb",
                  display: "flex",
                  alignItems: "center",
                  fontWeight: currentPath === item.href ? "bold" : "medium",
                }}
              >
                {item.title}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
