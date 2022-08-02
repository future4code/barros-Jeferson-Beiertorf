import React from "react";
import axios from "axios";
import {useState, useEffect} from "react";


const listUser = () => {


{listUsers.map((user) => {
    return <li key={user.id}>{user.name}</li>
  })}

}

export default listUser;