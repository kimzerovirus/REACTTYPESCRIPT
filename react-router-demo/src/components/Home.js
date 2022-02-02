import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>HomePage</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
          {/* 기존 v5의 history.push, replace는 history라는 스택의 맨위에 push하거나 맨위의 스택을 replace하던 방식을 v6에서 optional로 바뀜   */}
        Place order
      </button>
    </>
  );
}

export default Home;
