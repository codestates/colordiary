// require('dotenv').config();
// const jwt = require('jsonwebtoken');
const { userinfo } = require('../../models');

// const accessKey = process.env.ACCESS_SECRET;
// const refreshKey = process.env.REFRESH_SECRET;

module.exports = async (req, res) => {
    const refreshTokenData = isAuthorized(req)  //토큰펑션에서 req.cookie확인  decode = userinfo{}로 반환 
    //토큰펑션에 디코디드해주는곳에 아예 cookie라는것이 없다면 null, 쿠키라는것이 있다면 키로 열어줘서 반환
    console.log(refreshTokenData, "+++++++++")

    // 반환된(decode)된것이 없으면,혹은 조작된 decode일경우 
    // 반환된을 유저인포에 찾아서 

    if (!refreshTokenData) {
        res.send().json()
    } else {
        await user
    }
    
    /*
    헤더 authorization 부분이 없는 요청 혹은 잘못된 토큰을 전달받은 경우, 응답에는 'invalid access token' 메세지가 포함되어야 합니다
    헤더 authorization 부분에 jwt 토큰이 존재하며 토큰에 유저정보가 담겨져 있는경우, 해당 유저의 정보를 리턴해야 합니다 
    */
    //res.status(500).json({message: 'user_refreshtoken'}) 
   /*  요청에 담긴 refresh token이 유효하다면 새로운 access token을 발급해 줌과 동시에 유저가 요청한 정보를 반환합니다.
    요청에 담긴 refresh token이 유효하지 않거나, 조작된 토큰일 경우 각각 다른 응답을 반환합니다. */
    req.cookie

    res.send('hi😁') 
   console.log("😹")
}