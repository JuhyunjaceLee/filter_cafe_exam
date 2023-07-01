import React from "react";
import style from "./InfoBtn.module.css";
import { FaWifi, FaChair, FaToiletPaper, FaToilet } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { MdOutlineOutlet } from "react-icons/md";
import { GiSoundOff } from "react-icons/gi";

export default function InfoBtn() {
  return (
    <div className={style.infoBtn_wrap}>
      <FaWifi className={style.infoBtn_icon} />
      <PiCoffeeFill className={style.infoBtn_icon} />
      <FaChair className={style.infoBtn_icon} />
      <MdOutlineOutlet className={style.infoBtn_icon} />
      <GiSoundOff className={style.infoBtn_icon} />
      <FaToiletPaper className={style.infoBtn_icon} />
      <FaToilet className={style.infoBtn_icon} />
    </div>
  );
}
