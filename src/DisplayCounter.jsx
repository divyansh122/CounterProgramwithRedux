import { useSelector } from "react-redux";

const DisplayCounter=()=>{
  const counter = useSelector((store)=>store.counter);
  return (
    <>
    
    <h1>Counter current value :{counter}</h1>
    </>
  );
}
export default DisplayCounter;
