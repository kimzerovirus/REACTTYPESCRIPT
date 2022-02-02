import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
    // replace true를 해줘서 로그인 후에 뒤로가기로 다시 로그인 페이지에 접속하지 못하도록하게 한다.
    // redirectPath는 로그인 페이지에 들어오기 전페이지 기록으로 이동하기 위한것
  };

  return (
    <div>
      <label htmlFor="user">
        username:{" "}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
