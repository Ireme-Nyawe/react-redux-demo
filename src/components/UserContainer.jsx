import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../redux";
function UserContainer() {
  const dispatch = useDispatch();
  const users = useSelector((state) => {
    return state.user;
  });
  console.log("user");
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      users
      <hr />
      <p>
        {users.users.map((user) => (
          <h2>{user.name}</h2>
        ))}
      </p>
    </div>
  );
}
export default UserContainer;
