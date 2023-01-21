import React from "react";

// imported component
import AddUser from "./AddUser";
import AllUser from "./AllUser";

// metarial UI

import { AppBar, Toolbar, styled, Typography } from "@mui/material";

const Header = styled(AppBar)`
  background-color: silver;
  color: black;
  position: static;
`;
const Tag = styled(Typography)`
  font-size: 1.6rem;
  margin-left: 1rem;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Header>
      <Toolbar>
        <Tag>Home</Tag>
        <Tag>All users</Tag>
        <Tag>Add user</Tag>
      </Toolbar>
    </Header>
  );
};

export default Navbar;
