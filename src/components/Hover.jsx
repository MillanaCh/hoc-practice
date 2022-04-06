import hofComponent from "./withCounter";

function Hover({counter, setCounter}) {
  return (
    <>
    <div>Hover {counter}</div>
    <button onMouseEnter={() => setCounter(prev => prev + 1)} >Add one</button>
    </>
  )
}
export default hofComponent(Hover)
