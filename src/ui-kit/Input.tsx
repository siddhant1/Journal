import React from "react";

interface InputFieldProps {
  label: string;
  helperLabel?: string;
  type?: string;
  id: string;
  placeholder: string;
}

const InputField = ({
  label,
  helperLabel,
  type = "text",
  id,
  placeholder,
  ...rest
}: InputFieldProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-input-label-primary"
        >
          {label}
        </label>
        {helperLabel && (
          <p className="mt-1 text-xs text-input-label-primary">{helperLabel}</p>
        )}
      </div>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-3 leading-tight text-gray-100 border rounded border-input-border-primary bg-background-primary"
        {...rest}
      />
    </div>
  );
};

export default InputField;
