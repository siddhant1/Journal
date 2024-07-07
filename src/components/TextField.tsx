import React, { useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import TextAreaAutoSize from "../ui-kit/TextAreaAutoSize";

const TextInput = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("💬");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleEmojiSelect = (emoji: any) => {
    setSelectedEmoji(emoji.native);
    setShowEmojiPicker(false);
  };

  return (
    <div className="relative flex w-full">
      <div className="flex items-center justify-center rounded-full bg-background-primary w-11 h-11 shrink-0 grow-0">
        <button
          className=" focus:outline-none"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          {selectedEmoji || "💬"}
        </button>
      </div>
      <TextAreaAutoSize
        value={inputValue}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-transparent rounded-lg outline-none "
      />

      {showEmojiPicker && (
        <div className="absolute left-[-15px] z-10 top-[60px]">
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </div>
      )}
    </div>
  );
};

export default TextInput;
