"use client";
import { useState } from "react"; // useState를 import합니다.
import styles from "../styles/homeLeftNav.module.css";

export default function Navigation() {
  const [selected, setSelected] = useState("1"); // 선택한 값을 상태로 관리합니다.

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    if (event == null) setSelected("1");
    else {
      setSelected(event.target.value);
    } // 라디오 버튼의 값을 상태에 설정합니다.
  };

  // 선택한 값에 따라 .divnav의 배경색을 변경하는 스타일입니다.
  const divnavStyle = {
    top:
      selected === "1"
        ? "0" // profile일 때 색상
        : selected === "2"
        ? "14.3%" // settings일 때 색상
        : selected === "3"
        ? "28.57%" // posts일 때 색상
        : selected === "4"
        ? "42.87%" // posts일 때 색상
        : selected === "5"
        ? "57.17%" // posts일 때 색상
        : selected === "6"
        ? "71.47%" // posts일 때 색상
        : "85.77%", // books일 때 색상
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.div}>
        {/* divnav에 선택한 색상을 적용합니다. */}
        <div className={styles.divnav} style={divnavStyle}></div>
        <input
          type="radio"
          id="editplace"
          value="1"
          name="dxStudioMain"
          onChange={handleChange}
          defaultChecked={true}
        />
        <label htmlFor="editplace" className={styles.label}>
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="9"
                y="12"
                width="22"
                height="5"
                rx="1"
                className={`${styles.fill} ${styles.stroke}`}
              />
              <rect
                x="10"
                y="13"
                width="20"
                height="17"
                rx="1"
                className={styles.stroke}
                stroke-width="1.8"
              />
              <rect
                x="23"
                y="20"
                width="2"
                height="6"
                rx="1"
                transform="rotate(90 23 20)"
                className={styles.fill}
              />
            </svg>
          </div>
          작업공간
        </label>
        <input
          type="radio"
          id="upload"
          value="2"
          name="dxStudioMain"
          onChange={handleChange}
        />
        <label htmlFor="upload" className={styles.label}>
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.7313 9C14.3293 9 11.6157 11.7068 11.1286 15.1119C8.70936 15.7911 7 18.1632 7 20.8823C7 20.9607 7.00141 21.0389 7.0042 21.1167C7.00141 21.189 7 21.2615 7 21.3343C7 24.3965 9.48241 26.8789 12.5446 26.8789H17.7083V25.0789H12.5446C10.4765 25.0789 8.8 23.4024 8.8 21.3343C8.8 21.2756 8.80134 21.2173 8.804 21.1594L8.8058 21.1199L8.80415 21.0804C8.80139 21.0148 8.8 20.9488 8.8 20.8823C8.8 18.6924 10.2919 16.9905 12.0802 16.7488L12.8202 16.6488L12.8585 15.9031C13.0083 12.9867 15.1987 10.8 17.7313 10.8C19.2318 10.8 20.5954 11.5543 21.5043 12.7817L21.9923 13.4406L22.6937 13.016C23.1764 12.7238 23.7222 12.5615 24.2998 12.5615C26.0149 12.5615 27.5588 14.0459 27.7254 16.126L27.7766 16.7655L28.3979 16.9257C29.9531 17.3266 31.195 18.8911 31.195 20.8532C31.195 20.9196 31.1935 20.9855 31.1907 21.0509L31.1889 21.0937L31.1911 21.1364C31.1945 21.2019 31.1962 21.2679 31.1962 21.3343C31.1962 23.4024 29.5197 25.0789 27.4516 25.0789H22.2859V26.8789H27.4516C30.5138 26.8789 32.9962 24.3965 32.9962 21.3343C32.9962 21.2512 32.9944 21.1685 32.9907 21.0862C32.9936 21.0089 32.995 20.9312 32.995 20.8532C32.995 18.3772 31.5494 16.2025 29.4404 15.3748C28.9746 12.8074 26.9125 10.7615 24.2998 10.7615C23.653 10.7615 23.0343 10.8898 22.4643 11.1224C21.265 9.82264 19.5954 9 17.7313 9Z"
                className={styles.fill}
              />
              <path
                d="M20 29L20 20"
                className={styles.stroke}
                stroke-width="1.3"
                stroke-linecap="round"
              />
              <path
                d="M18 21L20 19L22 21"
                className={styles.stroke}
                stroke-width="1.3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          업로드
        </label>
        <input
          type="radio"
          id="environment"
          value="3"
          name="dxStudioMain"
          onChange={handleChange}
        />
        <label htmlFor="environment" className={styles.label}>
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="icon/DXspace 40">
                <path
                  id="Subtract"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.9347 7.18756C20.5015 6.93748 19.9679 6.93748 19.5347 7.18756L9.7 12.8656C9.26684 13.1157 9 13.5779 9 14.0781V25.4342C9 25.9344 9.26684 26.3965 9.7 26.6466L16.9801 30.8498V28.7713L10.8 25.2032V14.309L20.2347 8.86188L29.6694 14.309V23.0107H31.4694V14.0781C31.4694 13.5779 31.2026 13.1157 30.7694 12.8656L20.9347 7.18756Z"
                  className={styles.fill}
                />
                <path
                  id="Subtract_2"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0332 15.1184L19.334 20.2855V28.4349H21.134V20.2855L30.4349 15.1184L29.5607 13.5449L20.234 18.7264L10.9074 13.5449L10.0332 15.1184Z"
                  className={styles.fill}
                />
                <path
                  id="Subtract_3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.4885 25.3492L20.3612 30.289C20.3443 30.2993 20.3309 30.3143 20.3225 30.3322L19.4236 32.2583C19.3934 32.323 19.4387 32.3975 19.51 32.4005L21.6337 32.4895C21.6535 32.4903 21.673 32.4853 21.6899 32.475L29.8438 27.519L28.4885 25.3492ZM30.8293 26.9199L31.501 26.5117C32.1046 26.1448 32.2966 25.358 31.9297 24.7544C31.5628 24.1507 30.776 23.9588 30.1723 24.3257L29.474 24.7501L30.8293 26.9199Z"
                  className={styles.fill}
                />
              </g>
            </svg>
          </div>
          환경
        </label>
        <input
          type="radio"
          id="asset"
          value="4"
          name="dxStudioMain"
          onChange={handleChange}
        />

        <label htmlFor="asset" className={styles.label}>
          <div>
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 8.14434C20.4047 8.05502 20.5953 8.05502 20.75 8.14434L30.6423 13.8557C30.797 13.945 30.8923 14.11 30.8923 14.2887V25.7113C30.8923 25.89 30.797 26.055 30.6423 26.1443L20.75 31.8557C20.5953 31.945 20.4047 31.945 20.25 31.8557L10.3577 26.1443C10.203 26.055 10.1077 25.89 10.1077 25.7113V14.2887C10.1077 14.11 10.203 13.945 10.3577 13.8557L20.25 8.14434Z"
                className={styles.stroke}
                stroke-width="1.8"
              />
              <path
                d="M20.25 13.1443C20.4047 13.055 20.5953 13.055 20.75 13.1443L26.3122 16.3557C26.4669 16.445 26.5622 16.61 26.5622 16.7887V23.2113C26.5622 23.39 26.4669 23.555 26.3122 23.6443L20.75 26.8557C20.5953 26.945 20.4047 26.945 20.25 26.8557L14.6878 23.6443C14.5331 23.555 14.4378 23.39 14.4378 23.2113V16.7887C14.4378 16.61 14.5331 16.445 14.6878 16.3557L20.25 13.1443Z"
                className={styles.stroke}
                stroke-width="1.8"
              />
              <path
                d="M10.5 15L20.5 20.3333M20.5 20.3333L30.5 15M20.5 20.3333V31"
                className={styles.stroke}
                stroke-width="1.8"
              />
            </svg>
          </div>
          에셋
        </label>
        <input
          type="radio"
          id="assetModelSet"
          value="5"
          name="dxStudioMain"
          onChange={handleChange}
        />
        <label htmlFor="assetModelSet" className={styles.label}>
          <div>
            <svg
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 8.64434C20.4047 8.55502 20.5953 8.55502 20.75 8.64434L30.6423 14.3557C30.797 14.445 30.8923 14.61 30.8923 14.7887V26.2113C30.8923 26.39 30.797 26.555 30.6423 26.6443L20.75 32.3557C20.5953 32.445 20.4047 32.445 20.25 32.3557L10.3577 26.6443C10.203 26.555 10.1077 26.39 10.1077 26.2113V14.7887C10.1077 14.61 10.203 14.445 10.3577 14.3557L20.25 8.64434Z"
                className={styles.stroke}
                stroke-width="1.8"
              />
              <path
                d="M20.25 13.6443C20.4047 13.555 20.5953 13.555 20.75 13.6443L26.3122 16.8557C26.4669 16.945 26.5622 17.11 26.5622 17.2887V23.7113C26.5622 23.89 26.4669 24.055 26.3122 24.1443L20.75 27.3557C20.5953 27.445 20.4047 27.445 20.25 27.3557L14.6878 24.1443C14.5331 24.055 14.4378 23.89 14.4378 23.7113V17.2887C14.4378 17.11 14.5331 16.945 14.6878 16.8557L20.25 13.6443Z"
                className={`${styles.fill} ${styles.stroke}`}
                fill-opacity="0.25"
                stroke-width="1.8"
              />
              <path
                d="M10.5 15.5L20.5 20.8333M20.5 20.8333L30.5 15.5M20.5 20.8333V31.5"
                className={styles.stroke}
                stroke-width="1.8"
              />
              <g filter="url(#filter0_d_2244_19379)">
                <circle cx="28" cy="15" r="5.5" className={styles.fill} />
              </g>
              <path
                d="M25.5 13.4375C25.6786 13.125 26.4286 12.5 28 12.5C29.5714 12.5 30.3214 13.125 30.5 13.4375M25.5 13.4375C25.5595 13.75 26.1429 14.375 28 14.375C29.8571 14.375 30.4405 13.75 30.5 13.4375M25.5 13.4375V15.1562M30.5 13.4375V15.1562M25.5 15.1562V16.69C25.5 16.8094 25.5415 16.927 25.6398 16.9948C25.9541 17.2117 26.6929 17.5 28 17.5C29.3071 17.5 30.0459 17.2117 30.3602 16.9948C30.4585 16.927 30.5 16.8094 30.5 16.69V15.1562M25.5 15.1562C25.6786 15.4167 26.4286 15.9375 28 15.9375C29.5714 15.9375 30.3214 15.4167 30.5 15.1562"
                stroke="white"
                stroke-width="0.6"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <defs>
                <filter
                  id="filter0_d_2244_19379"
                  x="22"
                  y="9.5"
                  width="12"
                  height="12"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="0.5" />
                  <feGaussianBlur stdDeviation="0.25" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2244_19379"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2244_19379"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          에셋 모델 설정
        </label>
        <input
          type="radio"
          id="display"
          value="6"
          name="dxStudioMain"
          onChange={handleChange}
        />
        <label htmlFor="display" className={styles.label}>
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 14V11H13.8889M26.6667 11H30V14"
                className={styles.stroke}
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30 27L30 30L26.1111 30M13.3333 30L10 30L10 27"
                className={styles.stroke}
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="13"
                y="15"
                width="14"
                height="11"
                rx="1"
                className={styles.fill}
              />
            </svg>
          </div>
          디스플레이
        </label>
        <input
          type="radio"
          id="QR"
          value="7"
          name="dxStudioMain"
          onChange={handleChange}
        />
        <label htmlFor="QR" className={styles.label}>
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.8 17.2V11.8H17.2V17.2H11.8ZM10 11C10 10.4477 10.4477 10 11 10H18C18.5523 10 19 10.4477 19 11V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18V11ZM11.8 28.2V22.8H17.2V28.2H11.8ZM10 22C10 21.4477 10.4477 21 11 21H18C18.5523 21 19 21.4477 19 22V29C19 29.5523 18.5523 30 18 30H11C10.4477 30 10 29.5523 10 29V22ZM22.8 11.8V17.2H28.2V11.8H22.8ZM22 10C21.4477 10 21 10.4477 21 11V18C21 18.5523 21.4477 19 22 19H29C29.5523 19 30 18.5523 30 18V11C30 10.4477 29.5523 10 29 10H22ZM21.2 21C21.0895 21 21 21.0895 21 21.2V23.8C21 23.9105 21.0895 24 21.2 24H23.8C23.9105 24 24 23.9105 24 23.8V21.2C24 21.0895 23.9105 21 23.8 21H21.2ZM24.2 24C24.0895 24 24 24.0895 24 24.2V26.8C24 26.9105 24.0895 27 24.2 27H26.8C26.9105 27 27 26.9105 27 26.8V24.2C27 24.0895 26.9105 24 26.8 24H24.2ZM27 21.2C27 21.0895 27.0895 21 27.2 21H29.8C29.9105 21 30 21.0895 30 21.2V23.8C30 23.9105 29.9105 24 29.8 24H27.2C27.0895 24 27 23.9105 27 23.8V21.2ZM27.2 27C27.0895 27 27 27.0895 27 27.2V29.8C27 29.9105 27.0895 30 27.2 30H29.8C29.9105 30 30 29.9105 30 29.8V27.2C30 27.0895 29.9105 27 29.8 27H27.2ZM21 27.2C21 27.0895 21.0895 27 21.2 27H23.8C23.9105 27 24 27.0895 24 27.2V29.8C24 29.9105 23.9105 30 23.8 30H21.2C21.0895 30 21 29.9105 21 29.8V27.2Z"
                className={styles.fill}
              />
            </svg>
          </div>
          QR
        </label>
      </div>
    </nav>
  );
}
