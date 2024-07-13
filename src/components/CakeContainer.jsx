import { connect } from "react-redux";
import BuyCake from "../redux";
function CakeContainer(props){
    return (
        <div>
            <h2>Number of cakes {props.numOfCakes}</h2>
            <button>buy a cake</button>
        </div>
    )
}
const mapStateToProps =(state) => {
    return {numOfCakes:state.numOfCakes}
}
export default connect(mapStateToProps) (CakeContainer);