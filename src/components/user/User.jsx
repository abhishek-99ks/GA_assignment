import { Link } from "react-router-dom";
import "./user.css";

const User = ({ user }) => {
  return (
    <div className="user">
      <Link className="link" to={`/?user=${user.id}`}>
        <p className="user__name">{user.name}</p>
      </Link>
    </div>
  );
};

export default User;
