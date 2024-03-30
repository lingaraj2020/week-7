import {  useContext } from "react";
import { CountContext, setCountContext } from "./context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

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
    <EvencountRender/>
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

function EvencountRender(){
  const isEven=useRecoilValue(evenSelector);
  return <div>
    {isEven ?"It is even":null}
  </div>
}

function Buttons() {
  const setCount=useSetRecoilState(countAtom);
  //setCount(count+1);
  //setCount(c=> c+1);
  //setCount(function(c){
  // return c+1;
  // })

  return (
    <div>
      <button onClick={() => {
        setCount(count=> count+1);
      }}>Increase</button>
      <button onClick={() => {
        setCount(count=> count-1);
      }}>Decrease</button>
    </div>
  );
}

export default App;
