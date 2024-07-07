import React from "react";
import Paper from "../ui-kit/Dialog";
import InputField from "../ui-kit/Input";

const SignupForm = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-black">
      <Paper heading="SIGN UP" subheading="Create an account to continue">
        <div className="flex flex-col w-full mt-5 mb-5">
          <InputField
            label="Email"
            type="email"
            id="email"
            placeholder="Enter your email"
          />

          <InputField
            label="Username"
            type="username"
            id="username"
            placeholder="Choose a preferred username"
          />

          <InputField
            label="Password"
            type="password"
            id="password"
            placeholder="Choose a strong password"
          />
          <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded">
            Continue
          </button>

          <p className="mt-3 text-gray-500 text-md">
            Already have an account?{" "}
            <a className="text-input-label-primary" href="/">
              Login &#8594;
            </a>
          </p>
        </div>
      </Paper>
    </div>
  );
};

export default SignupForm;
