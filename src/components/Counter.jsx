import hofComponent from "./withCounter";

function Counter({counter, setCounter}) {
  return (
    <>
    <div>Counter {counter}</div>
    <button onClick={() => setCounter(prev => prev + 1)}>Add 1</button>
    </>
  )
}
export default hofComponent(Counter)

