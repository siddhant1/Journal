import React, { useState } from "react";

import LoginForm from "../components/LoginForm";
import LogoScreenSkeleton from "./common/LogoScreenSkeleton";
import SignupForm from "../components/SignupForm";
import LoginSignup from "../components/LoginSignUp";

const Login = () => {
  return (
    <LogoScreenSkeleton>
      <LoginSignup />
    </LogoScreenSkeleton>
  );
};

export default Login;
