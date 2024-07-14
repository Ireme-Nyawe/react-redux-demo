import { useSelector, useDispatch } from "react-redux";
import BuyCake from "../redux";
export function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
      <button onClick={()=>dispatch(BuyCake())}>buy a cake</button>
    </div>
  );
}
