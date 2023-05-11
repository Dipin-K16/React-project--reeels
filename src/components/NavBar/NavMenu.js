import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { createSvgIcon } from "@mui/material";
import React from "react";

const NavMenu = () => {
  const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    "Home"
  );

  return (
    <div>
      <Nav className="me-auto">
        <Link to="/">
          <HomeIcon
            color="primary"
            sx={{ fontSize: 25, paddingRight: "2px", marginBottom: "4px" }}
          />
          Home
        </Link>
        <Link to="/new-movies">New Releases</Link>
        <Link to="/favourite">Watch List</Link>
        <Link to="/post">Best of all</Link>
      </Nav>
    </div>
  );
};

export default NavMenu;
