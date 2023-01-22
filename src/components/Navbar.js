import React from "react";
import { NavLink } from "react-router-dom";

// imported component

// metarial UI

import { AppBar, Toolbar, styled, Typography } from "@mui/material";

const Header = styled(AppBar)`
  color: white;
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Tag = styled(NavLink)`
  font-size: 1.6rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  margin-left: 3rem;
`;

const Navbar = () => {
  return (
    <Header>
      <Toolbar>
        <Tag to="/">Home</Tag>
        <Tag to="/alluser">All user</Tag>
        <Tag to="/add">Add User</Tag>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
