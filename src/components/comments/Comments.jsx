import "./comments.css";

import { useEffect, useState } from "react";
import axios from "axios";

const Comments = ({ post_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`posts/${post_id}/comments`);
      setComments(res.data);
    };

    fetchComments();
  }, [post_id]);

  return (
    <div className="comments">
      {comments.map((c) => (
        <>
          <p className="comment__email">{c.email}</p>
          <p className="comment__body">{c.body}</p>
        </>
      ))}
    </div>
  );
};

export default Comments;
