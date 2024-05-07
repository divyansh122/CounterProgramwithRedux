import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const Inputref = useRef();

  const handleOnIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleOnDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleOnAdd = () => {
    dispatch({
      type: "ADD",
      payload: {
        num: Inputref.current.value,
      },
    });
  };

  const handleOnSubtract = () => {
    dispatch({
      type: "SUBTRACT",
      payload: {
        num: Inputref.current.value, 
      },
    });
  };

  return (
    <>
      <div className="d-grid gap-20 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={handleOnIncrement}>
          +1
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleOnDecrement}>
          -1
        </button>
      </div>
      <div className="d-grid gap-10 d-sm-flex justify-content-sm-center control-row">
        <input type="text" placeholder="enter number" ref={Inputref} />
        <button type="button" className="btn btn-info" onClick={handleOnAdd}>
          ADD
        </button>
        <button type="button" className="btn btn-danger"nClick={handleOnSubtract}>
          SUBTRACT
        </button>
      </div>
    </>
  );
};

export default Controls;
