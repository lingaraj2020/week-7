import { Suspense, lazy, useContext, useState } from "react";
import { CountContext, setCountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  //wrap anyone that wants to use teleported value inside provider
  return (
    <div>
      <CountContext.Provider value={count}>
        <setCountContext.Provider value={setCount}>
        <Count setCount={setCount}/>
        </setCountContext.Provider>
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return <div>
    <CountRender/>
    <Buttons />
    </div>;
}

function CountRender(){
  const count=useContext(CountContext);

  return <div>
    {count}
  </div>
}
function Buttons() {
  const count=useContext(CountContext);
  const setCount=useContext(setCountContext);
  return (
    <div>
      <button onClick={() => {
        setCount(count+1);
      }}>Increase</button>
      <button onClick={() => {
        setCount(count-1);
      }}>Decrease</button>
    </div>
  );
}

export default App;
