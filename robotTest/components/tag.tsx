"use client";
import { useState } from "react"; // useState를 import합니다.
import styles from "../styles/tagTemplate.module.css";
import Image from "next/image";

export default function tagTemplate({
  color = "#fff", //색채우기 색
  label = "", //안에 내용
  filled = true, //색 채우기 할건지
  isDeleted = false, //삭제버튼 유무
  boderColor = "#fff", //외곽선 색
}) {
  const [isHovered, setIsHovered] = useState(false);

  //x에 삭제기능 넣기
  function clickedDeleted() {
    //자기 자신 삭제 되기
    // 부모 요소인 .tag를 찾아 삭제
    const tagElement = document.querySelector("." + styles.tag);
    if (tagElement != null) tagElement.remove();
  }

  const handleMouseEnter = () => {
    setIsHovered(true);
    // hover가 시작될 때 할 작업들을 여기에 추가합니다.
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // hover가 종료될 때 할 작업들을 여기에 추가합니다.
    console.log("f");
  };
  return (
    <div className={styles.tag}>
      <div
        className={styles.div}
        style={{
          background: filled ? color : "transparent",
          borderColor: boderColor,
        }}
      >
        <label style={{ color: filled ? "#FFF" : boderColor }}>{label}</label>

        {isHovered && (
          <div
            className={styles.imghover}
            style={{
              backgroundColor: filled ? "#fff" : boderColor,
            }}
          ></div>
        )}
        {filled ? (
          <Image
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.img}
            style={{ display: isDeleted ? "flex" : "none" }}
            src="/img/dx엑스.png"
            width={18}
            height={18}
            alt="DX studio Symbol"
            onClick={clickedDeleted}
          />
        ) : (
          <svg
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            onClick={clickedDeleted}
            cursor={"pointer"}
          >
            <path
              d="M5 5L13 13M5 13L13 5"
              stroke={boderColor}
              stroke-linecap="round"
            />
          </svg>
        )}
      </div>
    </div>
  );
}
