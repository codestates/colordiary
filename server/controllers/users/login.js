const { userInfo } = require('../../models');
const {generateToken, sendAccessToken } = require('../tokenfunction/token');

module.exports = async (req, res) => {
// 만약 req.body에 들어온값을 디비에서 찾아봐서 있으면 로그인 (어세스 리프레시 그리고 데이터에 유저인포보내줌)
// 그치만 없으면 오류보냄 
// req.body.password
// req.body.email
    const user = await userInfo.findOne({where: {email:'soyoung93104@gmail.com', password: 's1o2y3n4n6hg'}})
    console.log(user)
    if (!user) {
        res.status(412).json({message: "로그인에 실패했습니다.", data : null})
    } else {
       const token = generateToken(user) // 비밀번호 넣어줌 토큰 펑션에서 없애주나?
       //sendAccessToken(res,token)  // 반환값을 accesstoken     
       res.status(200).json({message:"로그인에 성공했습니다.", data: token})
    }
    /* res.status(500).json({message: 'login'}) */

}