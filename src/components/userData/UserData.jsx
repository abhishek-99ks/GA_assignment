import "./userData.css";

import Posts from "../posts/Posts";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import Profile from "../profile/Profile";

const UserData = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const user = new URLSearchParams(search).get("user");

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };

    fetchPosts();
  }, [search]);

  if (user) {
    return (
      <div className="userData">
        <Profile user={user} />
        <Posts posts={posts} user={user} />
      </div>
    );
  }

  return (
    <div className="userData">
      <Posts posts={posts} user={user} />
    </div>
  );
};

export default UserData;
