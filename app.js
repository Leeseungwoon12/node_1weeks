const express = require('express'); //express 프레임워크 사용하여 서버 만들기
const app = express(); 
const port = 3000;


const postsRouter = require("./routes/posts"); // require 로  ./routes 의 /posts를 가져옴

const connect = require("./schemas");
connect();

app.use(express.json()); //미들웨어

app.get('/', (req, res) => { // '/' 으로 들어온 get요청은 Hello World 를 response 한다.
res.send('Hello World!');
});

app.use("/api", [postsRouter]); // 미들웨어를 이용하여 posts 모듈을 사용 한다

app.listen(port, () => { //웹서버를 시작하여 지정포트에서 대기하도록 설정
    console.log(port, '포트로 서버가 열렸어요!');
});