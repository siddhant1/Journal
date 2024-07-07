import React from "react";
import Paper from "../ui-kit/Dialog";
import InputField from "../ui-kit/Input";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-black">
      <Paper heading="WELCOME BACK" subheading="Log into your account">
        <div className="w-full mt-5 ">
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email or username"
          />

          <InputField
            label="Password"
            type="password"
            id="password"
            placeholder="Enter your password"
            helperLabel="Forgot your password?"
          />
          <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded">
            Login Now
          </button>

          <p className="mt-3 text-gray-500 text-md">
            Not registered yet?{" "}
            <a className="text-input-label-primary" href="/signup">
              Register &#8594;
            </a>
          </p>
        </div>
      </Paper>
    </div>
  );
};

export default LoginForm;
