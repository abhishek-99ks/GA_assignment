import "./comments.css";

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

const Comments = ({ post_id }) => {
  const [comments, setComments] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`posts/${post_id}/comments` + search);
      setComments(res.data);
    };

    fetchComments();
  }, [search]);

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