import "../styles/reset.css";
import "../styles/login.css";
// import { useNavigate } from 'react-router-dom';
import loginLogo from "../assets/images/Bardic-admin-logo.svg";
import { useEffect, useState } from "react";

function Login() {
  // const navigate = useNavigate();

  const [adminName, setAdmineName] = useState('');
  const [password, setPassword] = useState('');

  const changedAdminName = e => {
    setAdmineName(e.target.value);
  };
//온체인지 됐을 때 그 값을 admin state에 넣어줌

  const changedInputPassword = e => {
    setPassword(e.target.value);
  };
//온체인지 됐을 때 그 값을 password state에 넣어줌

  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/;
// 정규식 (8~20자 , 1개 이상 영문자, 1개 이상 숫자, 1개 이상 특수문자)

useEffect(()=>{
  console.log(regex.test(password));
},[password])
// 요건 걍 테스트

const loginConfirm = e =>{
  e.preventDefault(); //헛짓거리 금지
  if (adminName.length === 0 || password.length === 0) {
    window.alert('입력하세요');
  }else if (regex.test(password) === false){
    window.alert('비번 똑디 입력하세요');
  }
  //else > 서버한테 검사받기

};


  return (
    <div className="login-area">
      <img className="logo" src={loginLogo}/>
      <p className="label">Administrator</p>

      <form action="">
      <p>
        <label htmlFor="admin-name">Admin name</label>
        <input
          type="text" 
          id="admin-name"
          onChange={changedAdminName}
          value={adminName}
        />
      </p>
      <p style={{marginTop:"24px"}}>
        <label htmlFor="admin-password">Password</label>
        <input 
          type="password" 
          id="admin-password"
          onChange={changedInputPassword}
          value={password}/>
      </p>
      <button onClick={loginConfirm}>Sign in</button>
      </form>

      
    </div>
  );
}

export default Login;
