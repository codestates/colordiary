const { userInfo } = require('../../models');
const { isAuthorized } = require('../tokenfunction/token');
const accessKey = process.env.ACCESS_SECRET;

module.exports = async (req, res) => {
  console.log("회원탈퇴시 어떤 리퀘스트가 오나요", req.headers)

 /*  const decoded = isAuthorized(req, accessKey, 1 * 60 * 1000);
  console.log("검증 한 값은 뭐가 나오나요?", decoded)
  const {email} = decoded
  await userInfo.destroy({
      where: {
          email: email
      }
    }).then(() => {
        res
        .clearCookie('refreshtoken',{
            sameSite: 'none',
            secure: true,
            httpOnly: true})       
        status(205).json({message: '회원탈퇴가 완료되었습니다', data: null })
    })
    
} */
const decoded = isAuthorized(req, accessKey, 1 * 60 * 1000);
console.log("검증 한 값은 뭐가 나오나요?", decoded)
const {email} = decoded
await userInfo.destroy({
    where: {
        email: email
    }
  }).then(() => {
      res.status(205).json({message: '회원탈퇴가 완료되었습니다'})
  })
  
}