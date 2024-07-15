import { useSelector, useDispatch } from "react-redux";
import { BuyCake } from "../redux";
import { useState } from "react";
function NewCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Number of cakes {numOfCakes}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(BuyCake(number))}>buy {number} cake</button>
    </div>
  );
}
export default NewCakeContainer;
