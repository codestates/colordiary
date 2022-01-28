require("dotenv").config();
const { userInfo } = require("../../models");
const { isAuthorized } = require("./token");
const accessKey = process.env.ACCESS_SECRET;

module.exports = async (req, res) => {
  /*
    헤더 authorization 부분이 없는 요청 혹은 잘못된 토큰을 전달받은 경우, 응답에는 'invalid access token' 메세지가 포함되어야 합니다
    헤더 authorization 부분에 jwt 토큰이 존재하며 토큰에 유저정보가 담겨져 있는경우, 해당 유저의 정보를 리턴해야 합니다 
    */
  //res.send({message: 'user_accesstoken'})
  //console.log(req.headers)
  const accessTokenData = isAuthorized(req, accessKey, 1 * 60 * 1000);
  console.log(accessTokenData, "🎟");
  if (!accessTokenData) {
    res.status(401).json({ message: "토큰이 유효하지 않습니다.", data: null });
  } else {
    const user = await userInfo.findOne({
      where: {
        email: accessTokenData.email,
      },
    });
    console.log(user, "🐳");
    const { id, email, username, mobile, createdAt, updateAt } = user.dataValues;
    return res.status(200).json({
      message: "토큰인증이 성공했습니다.",
      data: { id, email, username, mobile, createdAt, updateAt } /* {
                 userInfo: {
                    email: email,
                    username: username,
                    mobile: mobile,
                    createdAt: createdAt,
                    updateAt: updateAt
                }
            } */,
    });
  }
};
// 헤더에 어세스 토큰을 까본 후, 디코드 해서  db에서 찾아서 정보나오는지
// 확인을 한다. 만약 일치하는것이 있다면 데이터를 담아 보내준다.
