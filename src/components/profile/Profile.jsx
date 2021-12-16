import "./profile.css";

import { useEffect, useState } from "react";

import axios from "axios";

const Profile = ({ user }) => {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await axios.get("/users/" + user);
      setProfile(res.data);
    };

    fetchProfile();
  }, [user]);

  return (
    <div className="profile">
      <div className="user__info">
        <p className="label">Name</p>
        <p className="label__info">{profile.name}</p>
        <p className="label">Username</p>
        <p className="label__info">{profile.username}</p>
        <p className="label">Email</p>
        <p className="label__info">{profile.email}</p>
        <p className="label">Phone</p>
        <p className="label__info">{profile.phone}</p>
        <p className="label">Website</p>
        <p className="label__info">{profile.website}</p>
      </div>
    </div>
  );
};

export default Profile;
