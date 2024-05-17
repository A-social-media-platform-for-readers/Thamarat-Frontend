import PostContainer from "../PostContainer/PostContainer";
import WritePost from "../WritePost/WritePost";
import styles from "./PostsContainer.module.css";
const PostsContainer = (props) => {
  return (
    <div className={`${styles.postsContainer} col-8`}>
      <WritePost />
      <PostContainer name={props.name} />
      <PostContainer
        postImage={require("../../imgs/postImg.png")}
        name={props.name}
      />
      <PostContainer name={props.name} />
    </div>
  );
};

export default PostsContainer;
