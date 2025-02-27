import React, { useState } from "react";

export default function Community() {
  const [posts, setPosts] = useState([
    { id: 1, user: "Alice", content: "Loving the new JIM updates!" },
    { id: 2, user: "Stanley", content: "Anyone up for a group workout?" }
  ]);
  const [newPost, setNewPost] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const post = {
      id: posts.length + 1,
      user: "CurrentUser",
      content: newPost
    };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-white mb-4">Community Interaction</h2>
      <form onSubmit={handlePostSubmit} className="mb-6">
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-2 "
          placeholder="Share your ideas..."
          rows="3"
        />
        <button type="submit" className="bg-blue-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Post
        </button>
      </form>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border border-gray-300 rounded">
            <p className="font-semibold">{post.user}</p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
