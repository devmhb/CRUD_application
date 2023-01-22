import React from "react";
import { useState } from "react";

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
const AddUser = () => {
  const [user, setuser] = useState(initialValue);

  const onValueChange = (e) =>
    setuser({ ...user, [e.target.name]: e.target.value });

  const AddnewUser = () => {};

  return (
    <Container>
      <FormControl>
        <Typography variant="h3">Add User</Typography>
        <Input
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          onChange={(e) => onValueChange(e)}
          name="name"
        />
        <Input
          id="outlined-multiline-flexible"
          label="Username"
          multiline
          maxRows={4}
          onChange={(e) => onValueChange(e)}
          name="username"
        />
        <Input
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={4}
          onChange={(e) => onValueChange(e)}
          name="email"
        />

        <Input
          id="outlined-multiline-flexible"
          label="Phone"
          type="number"
          multiline
          maxRows={4}
          onChange={(e) => onValueChange(e)}
          name="phone"
        />
        <Button variant="contained" onClick={() => AddnewUser()}>
          ADD USER
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
