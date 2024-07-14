import { useSelector, useDispatch } from "react-redux";
import { BuyIce } from "../redux";
export function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.ice.numOfIces);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
      <button onClick={()=>dispatch(BuyIce())}>buy a cake</button>
    </div>
  );
}
