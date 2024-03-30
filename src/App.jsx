import {  useContext } from "react";
import { CountContext, setCountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

function App() {

  //wrap anyone that wants to use teleported value inside provider
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
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
  const count=useRecoilValue(countAtom);

  return <div>
    <b>
    {count}
    </b>
  </div>
}
function Buttons() {
  const [count,setCount]=useRecoilState(countAtom); 

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
