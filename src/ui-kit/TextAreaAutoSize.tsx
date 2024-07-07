import React from "react";

const MIN_TEXTAREA_HEIGHT = 0;

export default function TextAreaAutoSize(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = React.useState("");
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setValue(event.target.value);

  React.useLayoutEffect(() => {
    if (!textareaRef.current) return;

    textareaRef.current.style.height = "inherit";

    textareaRef.current.style.height = `${Math.max(
      textareaRef.current.scrollHeight,
      MIN_TEXTAREA_HEIGHT
    )}px`;
  }, [value]);

  return (
    <textarea
      {...props}
      onChange={onChange}
      ref={textareaRef}
      style={{
        minHeight: MIN_TEXTAREA_HEIGHT,
        resize: "none",
      }}
      value={value}
    />
  );
}
