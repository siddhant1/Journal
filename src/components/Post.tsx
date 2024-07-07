import React from "react";

interface PostProps {
  author?: {
    name: string;
    avatar: string;
  };
  timestamp?: string;
  commentsCount?: number;
  emoji?: string;
}

const Post: React.FC<PostProps> = ({
  author,
  timestamp,
  children,
  commentsCount = 0,
  emoji,
}) => {
  return (
    <div className="py-7 px-5 w-[700px]  rounded-lg shadow-md bg-input-border-primary">
      <div className="flex items-center mb-2 space-x-2">
        {author && (
          <>
            <img
              src={author?.avatar}
              alt={author?.name}
              className="w-10 h-10 mr-2 rounded-full"
            />

            <div>
              <h3 className="font-semibold text-white">{author?.name}</h3>
              <span className="text-sm text-gray-400">{timestamp}</span>
            </div>
          </>
        )}

        {!author && (
          <div>
            <h3 className="font-semibold text-white">Create Post</h3>
          </div>
        )}
      </div>

      <div className="flex p-4 mb-4 space-x-5 rounded-lg text-text-content bg-background-black-tint">
        {emoji && (
          <div className="flex items-center justify-center rounded-full bg-background-primary w-11 h-11 shrink-0 grow-0">
            <button>{emoji || ""}</button>
          </div>
        )}
        <div className="w-full">{children}</div>
      </div>
      {commentsCount > 0 && (
        <div className="flex items-center">
          <span className="mr-2 text-yellow-500">💬</span>
          <span className="text-sm text-gray-400">
            {commentsCount} comments
          </span>
        </div>
      )}
    </div>
  );
};

export default Post;
