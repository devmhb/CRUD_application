import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, editUser } from "./services/api";

// <styles and styled componet>
import {
  FormControl,
  Typography,
  TextField,
  FormGroup,
  Button,
  styled,
} from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 2rem auto;
`;
const Input = styled(TextField)`
  margin-top: 10px;
`;
// </styles and styled componet>

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const EditUser = () => {
  const [user, setuser] = useState(initialValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    let response = await getUser(id);
    setuser(response.data);
    console.log(response);
  };

  const AddnewUser = async () => {
    await editUser(user, id);
    navigate("/alluser");
  };
  const onValueChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <FormControl>
        <Typography variant="h3">Edit User</Typography>
        <Input
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          name="name"
          value={user.name}
          onChange={(e) => onValueChange(e)}
        />
        <Input
          id="outlined-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
          name="username"
          value={user.username}
          onChange={(e) => onValueChange(e)}
        />
        <Input
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          name="email"
          value={user.email}
          onChange={(e) => onValueChange(e)}
        />

        <Input
          id="outlined-multiline-flexible"
          label="Phone"
          type="number"
          multiline
          maxRows={4}
          name="phone"
          value={user.phone}
          onChange={(e) => onValueChange(e)}
        />
        <Button variant="contained" onClick={(e) => AddnewUser(e)}>
          Submit Edit
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
