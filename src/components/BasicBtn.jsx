import React from "react";
import style from "./BasicBtn.module.css";

export default function BasicBtn({ text }) {
  return <div className={style.btn}>{text}</div>;
}
