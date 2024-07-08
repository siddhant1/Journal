import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const LoginSignup = () => {
  const [isLogInFormOpen, setIsLoginFormOpen] = useState(true);

  const moveToLogin = () => {
    setIsLoginFormOpen(true);
  };

  const moveToSignup = () => {
    setIsLoginFormOpen(false);
  };

  return (
    <>
      {isLogInFormOpen && <LoginForm changeForm={moveToSignup} />}
      {!isLogInFormOpen && <SignupForm changeForm={moveToLogin} />}
    </>
  );
};

export default LoginSignup;
