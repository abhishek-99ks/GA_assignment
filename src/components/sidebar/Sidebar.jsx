import "./sidebar.css";
import Users from "../users/Users";

import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";

const Sidebar = () => {
  const [users, setUsers] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("/users" + search);
      setUsers(res.data);
    };

    fetchUsers();
  }, [search]);

  return (
    <div className="sidebar">
      <Users users={users} />
    </div>
  );
};

export default Sidebar;
