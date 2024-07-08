import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { formatDistanceToNow } from "date-fns";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { Post } from "../models/Post";
import Modal from "../ui-kit/Dialog";
import TextAreaAutoSize from "../ui-kit/TextAreaAutoSize";
import LoginSignup from "./LoginSignUp";

const TextInput = ({
  placeholder,
  onChange,
}: {
  placeholder: string;
  onChange: (post: Post) => void;
}) => {
  const { user } = useAuth();
  const [inputValue, setInputValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState("💬");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleCreatePost = () => {
    if (!user) {
      setIsModalOpen(true);
    }

    if (!inputValue) return;
    const newPost = new Post(
      user,
      formatDistanceToNow(new Date(), { addSuffix: true }),
      0,
      selectedEmoji,
      inputValue
    );

    onChange(newPost);

    setInputValue("");
    setSelectedEmoji("💬");
  };

  const handleEmojiSelect = (emoji: any) => {
    setSelectedEmoji(emoji.native);
    setShowEmojiPicker(false);
  };

  return (
    <>
      <div className="py-7 px-5 w-[700px]  rounded-lg shadow-md bg-input-border-primary">
        <div className="flex p-4 mb-4 space-x-5 rounded-lg text-text-content bg-background-black-tint">
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
              textAreaProps={{
                placeholder,
                className:
                  "w-full px-4 py-2 bg-transparent rounded-lg outline-none",
              }}
            />

            {showEmojiPicker && (
              <div className="absolute left-[-15px] z-10 top-[60px]">
                <Picker data={data} onEmojiSelect={handleEmojiSelect} />
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end text-right">
          <button
            onClick={handleCreatePost}
            className="w-[111px] h-[43px] mt-4 text-white bg-blue-500 rounded"
          >
            Post
          </button>
        </div>
      </div>

      {/* Render Modals */}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <LoginSignup />
      </Modal>
    </>
  );
};

export default TextInput;
