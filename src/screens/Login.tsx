import React from "react";

import LoginForm from "../components/LoginForm";
import LogoScreenSkeleton from "./common/LogoScreenSkeleton";

const Login = () => {
  return (
    <LogoScreenSkeleton>
      <LoginForm />
    </LogoScreenSkeleton>
  );
};

export default Login;
