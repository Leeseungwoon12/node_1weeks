const mongoose = require("mongoose"); //mongoose 모듈을 사용

const postsSchema = new mongoose.Schema({ //new객체를 이용하여 Schema를 지정 (구현하고자 하는 것의 기본 틀 작성)
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