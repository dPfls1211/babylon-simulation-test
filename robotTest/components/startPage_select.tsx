import Selectstyles from "../styles/StartSelectList.module.css";
import Select from "react-select";

const startSelectList = [
  <label>
    ㄱ <img></img> ㅎ
  </label>,
  <label>
    ㅎ <img></img> ㄱ
  </label>,
  <label>프로젝트 별 그룹</label>,
  <label>최신순</label>,
  <label>태그 별 그룹</label>,
];

export default function tagTemplate({
  isViewType = true, //왼쪽에 view 같은 것이 있는지
  viewType = "View", //있으면 무슨 내용인지
}) {
  return (
    <div className={Selectstyles.selectParent}>
      <div className={Selectstyles.div} tabIndex={1}>
        <label>{viewType}</label>
        <div className={Selectstyles.Selectbar}></div>
        <div className={Selectstyles.SelectedDiv}>
          <div className={Selectstyles.select__value}>
            <input
              type="radio"
              name="startPageSelect"
              id="startPageSelect_asc"
              value={"asc"}
              className={Selectstyles.select__input}
            />
            <label className={Selectstyles.select__inputText}>
              ㄱ{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 7.5H12M12 7.5L9.23077 4M12 7.5L9.23077 11"
                  stroke="#2F2F2F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              ㅎ
            </label>
          </div>
          <div className={Selectstyles.select__value}>
            <input
              type="radio"
              name="startPageSelect"
              id="startPageSelect_des"
              value={"des"}
              className={Selectstyles.select__input}
            />
            <label className={Selectstyles.select__inputText}>
              ㅎ{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 7.5H12M12 7.5L9.23077 4M12 7.5L9.23077 11"
                  stroke="#2F2F2F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              ㄱ
            </label>
          </div>
          <div className={Selectstyles.select__value}>
            <input
              type="radio"
              name="startPageSelect"
              id="startPageSelect_project"
              value={"project"}
              className={Selectstyles.select__input}
              defaultChecked={true}
            />
            <label className={Selectstyles.select__inputText}>
              프로젝트 별 그룹
            </label>
          </div>
          <div className={Selectstyles.select__value}>
            <input
              type="radio"
              name="startPageSelect"
              id="startPageSelect_news"
              value={"news"}
              className={Selectstyles.select__input}
            />
            <label className={Selectstyles.select__inputText}>최신순</label>
          </div>
          <div className={Selectstyles.select__value}>
            <input
              type="radio"
              name="startPageSelect"
              id="startPageSelect_tag"
              value={"tag"}
              className={Selectstyles.select__input}
            />
            <label
              aria-hidden="true"
              className={Selectstyles.select__inputText}
            >
              태그 별 그룹
            </label>
          </div>
          <img src="/img/arrowline 24x24.png"></img>
        </div>
      </div>
      <div className={Selectstyles.SelectedDivlist}>
        <ul>
          <li>
            <label htmlFor="startPageSelect_asc">
              ㄱ{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 7.5H12M12 7.5L9.23077 4M12 7.5L9.23077 11"
                  stroke="#2F2F2F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              ㅎ
            </label>
          </li>
          <li>
            <label htmlFor="startPageSelect_des">
              ㅎ{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M4 7.5H12M12 7.5L9.23077 4M12 7.5L9.23077 11"
                  stroke="#2F2F2F"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              ㄱ
            </label>
          </li>
          <li>
            <label htmlFor="startPageSelect_project">프로젝트 별 그룹</label>
          </li>
          <li>
            <label htmlFor="startPageSelect_news">최신순</label>
          </li>
          <li>
            <label htmlFor="startPageSelect_tag">태그 별 그룹</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
