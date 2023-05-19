import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../css/PayResult.css";

function PayResult() {
  const navigator = useNavigate();
  const home = () => {
    navigator("/");
  };

  return (
    <div className="PayResult">
      <h1>결제가 완료되었습니다.</h1>
      <button onClick={home}> 홈으로 가기</button>
    </div>
  );
}

export default PayResult;
