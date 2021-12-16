import "./post.css";

import Comments from "../comments/Comments";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post__info">
        <h3 className="post__userId">{post.userId}</h3>
        <p className="post__title">{post.title}</p>
        <p className="post__body">{post.body}</p>
        <hr />
        <p className="post__comments">Comments</p>
        <Comments post_id={post.id} />
      </div>
    </div>
  );
};

export default Post;
