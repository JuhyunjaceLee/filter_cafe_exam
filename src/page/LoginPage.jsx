import React, { useEffect, useState } from "react";
import style from "./LoginPage.module.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import SocialLoginBtns from "../components/LoginComponents/SocialLoginBtns";

export default function LoginPage() {
  const [saveChecked, setSaveChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ID = "ID";
  const CHECKED = "CHECKED";

  const checkedHandle = () => {
    setSaveChecked(!saveChecked);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("아이디를 입력하세요.");
    }
    if (password === "") {
      alert("비밀번호를 입력하세요.");
    }
    localStorage.setItem(ID, JSON.stringify(email));
    localStorage.setItem(CHECKED, saveChecked);
  };

  useEffect(() => {
    let idChecked = JSON.parse(localStorage.getItem(CHECKED));
    if (idChecked) {
      setSaveChecked(idChecked);
    } else {
      localStorage.setItem(ID, "");
    }
    let userId = localStorage.getItem(ID);
    if (userId !== "") {
      setEmail(JSON.parse(userId));
    }
  }, []);

  return (
    <>
      <div className={style.section}>
        <h1 className={style.login_title}>LOG IN</h1>
        <p>Continue with</p>
        <SocialLoginBtns />
      </div>
      <div className={style.section}>
        <h3>or use your email</h3>
        <form className={style.form}>
          <input
            className={style.input}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={style.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <fieldset className={style.fieldset}>
            <input
              id="check"
              type="checkbox"
              checked={saveChecked}
              onChange={checkedHandle}
            />
            <label htmlFor="check">Remember Me</label>
          </fieldset>
          <span className={style.tri_sentence}>
            <BsFillCaretRightFill />
            Forgot password?
          </span>
          <button
            className={style.login_btn}
            type="submit"
            onClick={handleLogin}
          >
            LOGIN
          </button>
        </form>
        <span className={style.regi_sentence}>
          New to LaptopFriendly?
          <span className={style.tri_sentence}>
            <BsFillCaretRightFill />
            Resister
          </span>
        </span>
      </div>
    </>
  );
}
