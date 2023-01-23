import React from "react";
import { useEffect, useState } from "react";

import { getUsers, deleteUser } from "./services/api";
import { Link } from "react-router-dom";

import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  styled,
  TableRow,
  Button,
  TableContainer,
} from "@mui/material";

const Alluser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let result = await getUsers();
    setUsers(result);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getUserDetails();
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
            <TableCell>EDit/Delete</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.data?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Link
                  to={`/edit/${user.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="contained">Edit</Button>
                </Link>
                <Button
                  variant="contained"
                  color="error"
                  style={{ marginLeft: "5px" }}
                  onClick={() => deleteUserData(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableCon>
  );
};

export default Alluser;
