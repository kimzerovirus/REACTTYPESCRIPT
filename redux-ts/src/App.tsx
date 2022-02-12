import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./_actions";
import { State } from "./_reducers";

function App() {
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state:State) => state.bank); // 리듀서의 state가 bank를 가지고 있는지 타입스크립트는 판별못하므로 타입을 가져와야됨

  return (
    <div className="App">
      <h1>{amount}</h1>
      <div>
        <button onClick={()=>depositMoney(1000)}>Deposit</button>
        <button onClick={()=>withdrawMoney(500)}>Withdraw</button>
        <button onClick={bankrupt}>Bankrupt</button>
      </div>
    </div>
  );
}

export default App;
