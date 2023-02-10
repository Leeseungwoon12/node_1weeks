const mongoose = require("mongoose"); //mongoose 모듈을 사용

const postsSchema = new mongoose.Schema({ //mongoose의 Schema를 새롭게 지정 한다는 뜻
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Posts", postsSchema); 
//mongoose 의 model을 posts 로 정의를 할 것이고, 그 값은 postsSchema에서 가져와서 module.exports로 내보내준다.