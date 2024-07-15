import { useSelector, useDispatch } from "react-redux";
import { BuyIce } from "../redux";
export function IceContainer() {
  const numOfCakes = useSelector((state) => state.ice.numOfIces);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ices {numOfCakes}</h2>
      <button onClick={() => dispatch(BuyIce())}>Buy Ice</button>
    </div>
  );
}

export default IceContainer;
