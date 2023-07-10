import React from "react";
import style from "./LoginPage.module.css";
import { BsFillCaretRightFill } from "react-icons/bs";
import SocialLoginBtns from "../components/LoginComponents/SocialLoginBtns";

export default function LoginPage() {
  const handleLogin = (e) => {
    e.preventDefault();
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
          <input className={style.input} type="text" placeholder="Email" />
          <input
            className={style.input}
            type="password"
            placeholder="Password"
          />
          <fieldset className={style.fieldset}>
            <input id="check" type="checkbox" />
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
