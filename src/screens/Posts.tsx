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
    <div className="flex items-center justify-center py-5 bg-black">
      <div className="container flex flex-col items-center space-y-4">
        <Post>
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
