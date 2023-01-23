import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  styled,
  TableRow,
  TableContainer,
} from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

import { getUser } from "./services/api";

const Alluser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let result = await getUser();
    console.log(result);
    setUsers(result);
  };

  const TableCon = styled(TableContainer)`
    max-width: 768px;
    margin: 0 auto;
  `;
  return (
    <TableCon>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.data?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableCon>
  );
};

export default Alluser;
