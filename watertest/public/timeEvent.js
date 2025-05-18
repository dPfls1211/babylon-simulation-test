import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

$(document).ready(function () {
    // 페이지가 로드되면 최초 한 번 시간 업데이트 실행
    console.log(0)
    updateClock();
})

function updateClock() {
    let currentTime = new Date();
    let year = currentTime.getFullYear();
    let month = currentTime.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
    let day = currentTime.getDate();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";

    // 12시간 형식으로 변환
    hours = hours % 12;
    hours = hours ? hours : 12; // 0시인 경우 12시로 표시

    // 한 자리 숫자일 경우 앞에 0을 추가
    month = (month < 10 ? "0" : "") + month;
    day = (day < 10 ? "0" : "") + day;
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    // HTML 요소에 현재 시간 업데이트
    document.getElementById("modelinfo-view-date").innerHTML =
        year + ". " + month + ". " + day;
    document.getElementById("modelinfo-view-time").innerHTML =
        hours + ":" + minutes + " " + ampm;
}