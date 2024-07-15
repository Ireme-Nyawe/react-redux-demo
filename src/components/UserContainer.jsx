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
  return users.loading ? (
    <h2>Loading...</h2>
  ) : users.error ? (
    <h2>{users.error}</h2>
  ) : (
    users && users.users.map((user) => <h2 key={user.id}>{user.name}</h2>)
  );
}
export default UserContainer;
