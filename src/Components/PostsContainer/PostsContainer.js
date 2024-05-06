import PostContainer from "../PostContainer/PostContainer";
import styles from "./PostsContainer.module.css";
const PostsContainer = () => {
  return (
    <div className={`${styles.postsContainer}`}>
      <PostContainer />
      <PostContainer postImage={require("../../imgs/postImg.png")} />
      <PostContainer />
    </div>
  );
};

export default PostsContainer;
