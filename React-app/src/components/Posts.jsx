import { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    loadData();
  }, []);
  return (
    <div>
      <h1>Load and Show Post Steps</h1>
      <ol>
        <li>Create a state to store the data</li>
        <li>Create useEffect with no dependency</li>
      </ol>
      <h3>Posts: {posts.length}</h3>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
