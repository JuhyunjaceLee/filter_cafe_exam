import React, { useEffect, useState } from "react";
import style from "./LoginPage.module.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import SocialLoginBtns from "../components/LoginComponents/SocialLoginBtns";
import { useCookies } from "react-cookie";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
  const [checked, setChecked] = useState(false);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  // };

  useEffect(() => {
    if (cookies.rememberUserId !== undefined) {
      setUserId(cookies.rememberUserId);
      setChecked(true);
    }
  }, []);

  const handleOnChange = (e) => {
    setChecked(e.target.checked);
    if (!e.target.checked) {
      removeCookie("rememberUserId");
    }
  };
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
            defaultValue={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <input
            className={style.input}
            type="password"
            placeholder="Password"
          />
          <fieldset className={style.fieldset}>
            <input
              id="check"
              type="checkbox"
              onChange={(e) => handleOnChange(e)}
              checked={checked}
            />
            <label htmlFor="check">Remember Me</label>
          </fieldset>
          <span className={style.tri_sentence}>
            <BsFillCaretRightFill />
            Forgot password?
          </span>
          <button className={style.login_btn} type="submit">
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
