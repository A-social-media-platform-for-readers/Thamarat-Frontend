import { useState, useEffect } from "react";

import PostContainer from "../PostContainer/PostContainer";
import WritePost from "../WritePost/WritePost";
import styles from "./PostsContainer.module.css";
import Loading from "../Loading/Loading";
const PostsContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [next, setNext] = useState(
    "https://backend-9s26.onrender.com/social-media/posts/"
  );

  const jwt = localStorage.getItem("token");

  // request user data from backend

  useEffect(() => {
    const interval = setInterval(() => {
      if (next) {
        (async () => {
          const response = await fetch(next, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${jwt}`,
            },
            credentials: "include", // Include cookies with the request
          });

          const content = await response.json();
          setPosts((prevPosts) => [...prevPosts, ...content.results]);
          setNext(content.next);
          setLoading(false);
        })();
      } else {
        console.log("Done");
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [posts, next, jwt]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className={`${styles.postsContainer} col-8`}>
      <WritePost addPost={addPost} />
      <div className="feed">
        {loading ? (
          <Loading />
        ) : (
          posts.map((post, i) => (
            <PostContainer
              key={i}
              id={post.id}
              name={props.name}
              content={post.content}
              comment_count={post.comment_count}
              like_count={post.like_count}
              image={post.image}
              liked={post.you_liked}
              user={post.user}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PostsContainer;
