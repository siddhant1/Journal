import React from "react";

import SignupForm from "../components/SignupForm";
import LogoScreenSkeleton from "./common/LogoScreenSkeleton";

const Signup = () => {
  return (
    <LogoScreenSkeleton>
      <SignupForm />
    </LogoScreenSkeleton>
  );
};

export default Signup;
