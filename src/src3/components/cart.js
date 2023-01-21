import { useDispatch, useSelector } from "react-redux/es/exports";
import { incNumber, decNumber,reset } from "./Redux/action";

function Counter() {

const myState = useSelector((state)=>
state.changeNumber);

const dispatch = useDispatch();

return (
  <div>
    <h1>Increment/Decrement counter</h1>

    <div className="container">
      <div className="column">
        <button type="button" className="btn btn-primary" onClick={()=> dispatch(incNumber())}> + </button>
      </div>

      <h2>{myState}</h2>

      <div className="column">
        <button type="button" className="btn btn-primary" onClick={()=> dispatch(decNumber())}> - </button>
      </div>

      <div className="column mt-2">
        <button type="button" className="btn btn-primary" onClick={()=> dispatch(reset())}> reset </button>
      </div>
    </div>
  </div>
);
}
export default Counter