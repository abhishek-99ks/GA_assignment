import User from "../user/User";

const Users = ({ users }) => {
  return (
    <div>
      {users.map((u) => (
        <User user={u} />
      ))}
    </div>
  );
};

export default Users;
