import React from "react";

const MIN_TEXTAREA_HEIGHT = 0;

const TextAreaAutoSize = ({
  value,
  onChange,
  textAreaProps,
}: {
  value: string;
  onChange: (value: string) => void;
  textAreaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [inputValue, setValue] = React.useState(value);
  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    if (onChange) {
      onChange(event.target.value);
      setValue(event.target.value);
    }
  };

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  React.useLayoutEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "inherit";

    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [inputValue]);

  return (
    <textarea
      {...textAreaProps}
      onChange={handleTextAreaChange}
      ref={textareaRef}
      style={{
        minHeight: MIN_TEXTAREA_HEIGHT,
        resize: "none",
      }}
      value={inputValue}
    />
  );
};

export default TextAreaAutoSize;
