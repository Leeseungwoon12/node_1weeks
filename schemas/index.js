const mongoose = require("mongoose"); //몽고DB 프레임워크를 사용할 준비

const connect = () => { //몽고 DB에 연결하 값을 connect 변수에 담음 

mongoose.connect("mongodb://localhost:27017/prac", {
useNewUrlParser: true,
useUnifiedTopology: true,
},6000000 )
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));
};

module.exports = connect; //module.exports 를 이용하여 몽고DB에 연결 할 수 있는 connect를 밖으로 내보내줌
