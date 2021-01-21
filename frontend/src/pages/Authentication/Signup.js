import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import Input from "../../components/Reusable/Input";
import Button from "../../components/Reusable/Button";

import classes from "./Auth.module.scss";

function Signup() {
  const [{ name, email, password }, setInfo] = useState({
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  const nameHandler = (event) => {
    setInfo({ name: event.target.value, email, password });
  };

  const emailHandler = (event) => {
    setInfo({ name, email: event.target.value, password });
  };

  const passwordHandler = (event) => {
    setInfo({ name, email, password: event.target.value });
  };

  const signupHandler = (event) => {
    alert(`${name}, ${email}, ${password}`);
    history.push("/movies");
    event.preventDefault();
  };

  return (
    <div className={classes.Auth}>
      <h2>Create your Netflix Account</h2>
      <form onSubmit={signupHandler}>
        <Input
          icon="name"
          type="text"
          name="Enter Your Full Name"
          value={name}
          onChange={nameHandler}
        />
        <Input
          icon="email"
          type="email"
          name="Enter Your Email"
          value={email}
          onChange={emailHandler}
        />
        <Input
          icon="password"
          type="password"
          name="Enter Your Password"
          value={password}
          onChange={passwordHandler}
        />
        <Button buttonName="Sign Up" type="submit" />
      </form>
    </div>
  );
}

export default Signup;
