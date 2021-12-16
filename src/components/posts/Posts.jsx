import "./posts.css";
import Post from "../post/Post";

const Posts = ({ posts, user }) => {
  if (user) {
    return (
      <div className="posts">
        {posts.map((p) => p.userId === Number(user) && <Post post={p} />)}
      </div>
    );
  }

  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
};

export default Posts;
