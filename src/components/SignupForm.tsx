import React from "react";
import Paper from "../ui-kit/Paper";
import InputField from "../ui-kit/Input";

const SignupForm = ({ changeForm }: { changeForm: () => void }) => {
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

          <div className="flex mt-3 space-x-2 text-gray-500 text-md">
            <p>Already have an account?</p>
            <p
              className="cursor-pointer text-input-label-primary"
              onClick={changeForm}
            >
              Login &#8594;
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default SignupForm;
