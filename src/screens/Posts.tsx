import React from "react";
import useAuth from "../hooks/useAuth";
import postsData from "../fixtures/posts.json";
import Post from "../components/Post";
import InputField from "../ui-kit/Input";
import TextInput from "../components/TextField";

const Posts = () => {
  const { user } = useAuth();
  const { posts } = postsData;

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-black">
      <div className="text-white w-[700px] mb-5">
        <h1 className="mb-4 text-2xl font-medium text-input-label-primary">
          Hello {user || "User"}
        </h1>
        <p className="mb-4 text-md text-text-content">
          How are you doing today? Would you like to share something with the
          community{" "}
          <span role="img" aria-label="smile">
            😊
          </span>
        </p>
      </div>

      <div className="container flex flex-col items-center space-y-4">
        <Post createAble handleCreatePost={() => console.log("Creating post")}>
          <TextInput
            placeholder="How are you feeling today"
            onChange={(e) => console.log(e.target.value)}
          />
        </Post>
        {posts.map((post) => (
          <Post
            key={post.id}
            author={post.author}
            timestamp={post.timestamp}
            commentsCount={post.commentsCount}
            emoji={post.emoji}
          >
            {post.content}
          </Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
