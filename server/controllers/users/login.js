require("dotenv").config();
const { userInfo } = require("../../models");
const { generateToken, sendRefreshToken } = require("../tokenfunction/token");
const accessKey = process.env.ACCESS_SECRET;
const refreshKey = process.env.REFRESH_SECRET;

module.exports = {
  // 만약 req.body에 들어온값을 디비에서 찾아봐서 있으면 로그인 (어세스 리프레시 그리고 데이터에 유저인포보내줌)
  // 그치만 없으면 오류보냄
  // req.body.password
  // req.body.email
  post: async (req, res) => {
    console.log(req.body); //{ loginInfo: { email: 'ㄹ', password: 'ㄹ' } }
    const user = await userInfo.findOne({
      where: { email: req.body.email, password: req.body.password },
    });

    if (!user) {
      res.status(412).json({ message: "로그인에 실패했습니다.", data: null });
    } else {
      const accesstoken = generateToken(user, accessKey, 1 * 60 * 1000); // 비밀번호 넣어줌 토큰 펑션에서 없애주나?
      const refreshtoken = generateToken(user, refreshKey, 5 * 60 * 1000);

      sendRefreshToken(res, refreshtoken); // 토큰 두개 모두 발급 완료
      res
        .status(200)
        .json({ message: "로그인에 성공했습니다.", data: accesstoken });
    } //data: {authorization: `Bearer ${accesstoken}`}
  },
};
