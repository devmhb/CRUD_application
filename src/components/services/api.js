import React from "react";
import axios from "axios";

const API_URL = "";

export const Adduser = async (data) => {
  try {
    return await axios.post(API_URL, data);
  } catch (err) {
    console.log(err.message);
  }
};
