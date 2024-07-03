import React from "react";
import Paper from "../ui-kit/Dialog";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center h-full bg-black">
      <Paper heading="WELCOME BACK" subheading="Log into your account">
        <div className="h-[263px]"></div>
      </Paper>
    </div>
  );
};

export default LoginForm;
