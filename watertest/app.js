const express = require("express");
const app = express();
const path = require("path");
// 정적 파일을 제공하기 위한 미들웨어 설정
app.use(express.static(path.join(__dirname, "public")));
// 루트 URL로 접속했을 때 index.html 파일 제공
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
// 서버 시작
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});