import hofComponent from "./withCounter";

function InputFunc({counter, setCounter}) {
  return (
    <>
    <div>
        <input onChange={(e) => setCounter(e.target.value.length)}/>
        {counter}
    </div>
    </>
  )
}
export default hofComponent(InputFunc)
