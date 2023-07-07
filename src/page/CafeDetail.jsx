import React from "react";
import style from "./CafeDetail.module.css";
import BasicBtn from "../components/BasicBtn";
import InfoBtn from "../components/InfoBtn";
import { IoMdPin } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import CafeDetailImg from "../components/CafeDetailImg";
import RatingStar from "../components/RatingStar";

export default function CafeDetail() {
  const handleSub = (e) => {
    e.preventDefault();
  };
  const timeInfo = [
    { day: "MON", time: "10:00 - 22:00" },
    { day: "TUE", time: "10:00 - 22:00" },
    { day: "WED", time: "10:00 - 22:00" },
    { day: "THU", time: "10:00 - 22:00" },
    { day: "FRI", time: "Day-off" },
    { day: "SAT", time: "10:00 - 18:00" },
    { day: "SUN", time: "10:00 - 18:00" },
  ];

  return (
    <div className={style.contents}>
      <section className={style.section_left}>
        <CafeDetailImg />
        <main>
          <div className={`${style.section_title} ${style.section_left_title}`}>
            <h1>FILTER CAFE</h1>
            <RatingStar />
          </div>
          <InfoBtn />
          <h3 className={style.comment_title}>COMMENT</h3>
          <form action="#">
            <textarea
              name="comment"
              rows="10"
              placeholder="Your comment is..."
              className={style.comment_box}
            ></textarea>
            <div className={style.comment_btn}>
              <BasicBtn
                onClick={handleSub}
                type="submit"
                text="SUB"
                className={style.comment_btn}
              >
                SUB
              </BasicBtn>
            </div>
          </form>
        </main>
      </section>
      <section className={style.section_right}>
        <img src="image/map_img.png" alt="map" className={style.section_img} />
        <div className={`${style.section_title} ${style.section_right_title}`}>
          <IoMdPin className={style.map_icon} />
          <span>서울특별시 강남구 000</span>
        </div>
        <div className={style.time_info_wrap}>
          <FiClock />
          <div className={style.time_info_box}>
            <div>
              {timeInfo.map((info, idx) => (
                <p key={idx}>{info.day}</p>
              ))}
            </div>
            <div>
              {timeInfo.map((info, idx) => (
                <p key={idx}>{info.time}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
