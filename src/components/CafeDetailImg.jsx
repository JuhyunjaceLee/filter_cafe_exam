import React from "react";
import styles from "./CafeDetailImg.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function CafeDetailImg() {
  const imageData = [
    {
      title: "cafe_detail_img_1",
      alt: "cafe_img_1",
      url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCVFQyVCOSVCNCVFRCU4RSU5OHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "cafe_detail_img_1",
      alt: "cafe_img_1",
      url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVDJUI5JUI0JUVEJThFJTk4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "cafe_detail_img_1",
      alt: "cafe_img_1",
      url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQyVCOSVCNCVFRCU4RSU5OHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <Carousel
      showArrows={true}
      autoPlay={false}
      infiniteLoop={true}
      showThumbs={false}
    >
      {imageData.map((img, idx) => (
        <div key={idx}>
          <img src={img.url} alt={img.alt} className={styles.cafe_detail_img} />
        </div>
      ))}
    </Carousel>
  );
}
