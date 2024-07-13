import { connect } from "react-redux";
import BuyCake from "../redux";
function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes {props.numOfCakes}</h2>
      <button onClick={props.BuyCake}>buy a cake</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { numOfCakes: state.numOfCakes };
};
const mapDispatchToProps = (dispatch) => {
  return { BuyCake: () => dispatch(BuyCake()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
