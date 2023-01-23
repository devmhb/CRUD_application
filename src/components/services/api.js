import React from "react";
import axios from "axios";

const API_URL = "http://127.0.0.1:3001/users";

export const Adduser = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (err) {
    console.log(err.message);
  }
};

export const getUser = async () => {
  try {
    return await axios.get(API_URL);
  } catch (err) {
    console.log(err.message);
  }
};
