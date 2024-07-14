import { useSelector } from "react-redux"
export function HooksCakeContainer(){
    const numOfCakes=useSelector(state=>state.numOfCakes)
    return(
        <div>
        <h2>Number of cakes {numOfCakes}</h2>
        <button onClick="">buy a cake</button>
      </div>
    )
}