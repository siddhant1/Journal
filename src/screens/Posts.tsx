import React from "react";
import { Post as PostClass } from "../models/Post";
import TextInput from "../components/TextField";
import postsData from "../fixtures/posts.json";
import useAuth from "../hooks/useAuth";
import Post from "../components/Post";

const Posts = () => {
  const { user } = useAuth();
  const { posts } = postsData;
  const [postContent, setPostContent] = React.useState(posts);

  const handleCreatePost = (post: PostClass) => {
    setPostContent([
      {
        id: postContent.length + 1,
        author: {
          name: user,
          avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        content: post.content,
        timestamp: post.timestamp,
        commentsCount: post.commentsCount,
        emoji: post.emoji,
      },
      ...postContent,
    ]);
  };

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
        <TextInput
          placeholder="How are you feeling today"
          onChange={handleCreatePost}
        />

        {postContent.map((post) => (
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
