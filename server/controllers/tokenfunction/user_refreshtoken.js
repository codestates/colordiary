// require('dotenv').config();
// const jwt = require('jsonwebtoken');
const { userinfo } = require('../../models');


module.exports = async (req, res) => {

    // const refreshToken = req.cookies.refreshToken
    // console.log(refreshToken,"+_+_+_+_+_+_+_+")
    // //쿠키에 리프레시 토큰자체가 없다면
    // if (!refreshToken) {
    //     res.send(400).json({message: "토큰이 없습니다."})

    // } //8-14까지 토큰검증 isAuthorized 함수에서 행해지는것..
    

    const refreshTokenData = isAuthorized(req.cookies.refreshToken)  //토큰펑션에서 req.cookie확인  decode = userinfo{}로 반환 
    //토큰펑션에 디코디드해주는곳에 아예 cookie라는것이 없다면 null, 쿠키라는것이 있다면 키로 열어줘서 반환
    console.log(refreshTokenData, "+++++++++")//유저인포

    // 반환된(decode)된것이 없으면,혹은 조작된 decode일경우 
    // 반환된을 유저인포에 찾아서 

    if (!refreshTokenData) {
        res.send(401).json({message :"토큰이 유효하지 않습니다."})
    } else {
        const {username, password, email, mobile} = refreshTokenData
        const userInfo = await userinfo.findOne({where : {
            username, 
            password, 
            email, 
            mobile
            } 
        })
        const accessToken = generateAccessToken(userInfo) 
        res.send(200).json({message : "어세스 토큰을 발급했습니다." , data: accessToken })

     // 유저가 요청한 정보 반환

    }
    
    /*
    헤더 authorization 부분이 없는 요청 혹은 잘못된 토큰을 전달받은 경우, 응답에는 'invalid access token' 메세지가 포함되어야 합니다
    헤더 authorization 부분에 jwt 토큰이 존재하며 토큰에 유저정보가 담겨져 있는경우, 해당 유저의 정보를 리턴해야 합니다 
    */
    //res.status(500).json({message: 'user_refreshtoken'}) 
   /*  요청에 담긴 refresh token이 유효하다면 새로운 access token을 발급해 줌과 동시에 유저가 요청한 정보를 반환합니다.
    요청에 담긴 refresh token이 유효하지 않거나, 조작된 토큰일 경우 각각 다른 응답을 반환합니다. */
   

   /*  res.send('hi😁') 
   console.log("😹") */
}