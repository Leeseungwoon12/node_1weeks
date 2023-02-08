    const express = require('express'); //여기로 require 을 이용하여 express 프레임 워크 가져오기
    const router = express.Router(); //

    const Posts = require("../schemas/post.js");// 포스트 저장 방식 불러오기?

     router.get("/posts", async (req, res) => { //

    const postsaArray = await Posts.find({}); //비동기 함수 await을 사용하여 게시물을 조회(find)

    const result = postsaArray.map(post => { //map을 왜사용 하는지는 알아봐야한다..
        return {
        postId: post._id,
        user: post._id,
        title: post._id,
        createdAt: post._id,
    }
    });
    

    res.json({ data: result }); //json을 이용하여 return 값인 result 를 data키에 담아 데이터 전송
    });

    router.post("/posts", async (req, res) => { //게시글 작성  비동기 함수
        const { user, password, title, content } = req.body; // 객체 구조 분해 할당으로 각각의 키에 맞는 값을 body에 저장
        const createdPosts = await Posts.create({ user, password, title, content }); 

        res.send({  "message": "게시글을 생성하였습니다."}); //게시글 생성 되었다는 message를 전달 (send)
    });

    router.get("/posts/:_postId", async (req, res) => { //필요한 게시글조회
        const postId = req.params._postId; //경로에 있는 _postId 를 params로 받아서 사용 할 수 있다.

        const post = await Posts.findOne({ _id: postId }); //비동기 함수를 사용하여 _id 값이 postId 인 값을 찾는다.

        res.json({ data: post }); // 위에서 찾아와 변수에 할당한 값을 data 로 전달한다.
    });

    router.put("/posts/:_postId", async(req, res) => {
        const postId = req.params._postId;  //동일하게 postId를 받아온다
        const { password, title, content } = req.body; //body에 있는 정보를 구조 분해 할당으로  각 키에 저장 (수정 될 정보를 받은건가?)

        const existsPosts = await Posts.find({ _id : postId }); //postId에 해당 하는 전체 게시물을 가져온다.
        if (existsPosts.length !== 0) { //_id키에 맞게 찾아온 existsPosts의 length 가 0 이 아니라면
            await Posts.updateOne({ _id : postId }, { $set: { password, title, content } }); //해당 postId 게시물을 구조분해할당으로 받아온 키의 값으로 바꾼다
        }

  res.json({  "message": "게시글을 수정하였습니다." }); //수정 완료 후 message 전달
    });

    router.delete("/posts/:_postId", async(req, res) => {
        const postId = req.params._postId;  //postId 를 params 로 받아와서 변수에 저장
        const password = req.body.password; //password 를 params 로 받아와서 변수에 저장

        const existsPosts = await Posts.find({ _id: postId }); //해당 id 키 값에 맞는 게시물을 찾고 (객체형태 ({},{}...))
        if (existsPosts.length !== 0) { //게시물이 0개가 아니라면
            await Posts.deleteOne({ postId }); // 해당 postId 값의 게시물을 지운다
        }

        res.json({ "message": "게시글을 삭제하였습니다."}); // 게시글 삭제 message 전달
    });

    module.exports = router; 