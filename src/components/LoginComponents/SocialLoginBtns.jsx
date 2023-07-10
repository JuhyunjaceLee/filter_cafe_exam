import React from "react";
import styles from "./SocialLoginBtns.module.css";
import { FcGoogle } from "react-icons/fc";
import { SiKakaotalk, SiNaver } from "react-icons/si";

export default function SocialLoginBtns() {
  const kakaoParams = {
    client_id: "dd2790042e2c074808e24828215646e5",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();

  return (
    <>
      <div className={styles.loginBtn_wrap}>
        <a className={styles.loginBtn_logo} href="#!">
          <FcGoogle className={styles.google_icon} />
        </a>
        <a
          className={styles.loginBtn_logo}
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
        >
          <SiKakaotalk className={styles.kakao_icon} />
        </a>
        <a className={styles.loginBtn_logo} href="#!">
          <SiNaver className={styles.naver_icon} />
        </a>
      </div>
    </>
  );
}
