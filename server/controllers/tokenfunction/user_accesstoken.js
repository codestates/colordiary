require('dotenv').config();
const { userinfo } = require('../../models');

const accessKey = process.env.ACCESS_SECRET;
const { isAuthorized } = require('./token')

module.exports = async (req, res) => {
    /*
    헤더 authorization 부분이 없는 요청 혹은 잘못된 토큰을 전달받은 경우, 응답에는 'invalid access token' 메세지가 포함되어야 합니다
    헤더 authorization 부분에 jwt 토큰이 존재하며 토큰에 유저정보가 담겨져 있는경우, 해당 유저의 정보를 리턴해야 합니다 
    */
    //res.send({message: 'user_accesstoken'})
    const accessTokenData = isAuthorized(req, accessKey, 1 * 60 * 1000);
    if(!accessTokenData){
        res.status(401).json({message: '토큰이 유효하지 않습니다.'})
    } else{
        const userInfo = await userinfos.findOne({
            where: {
                email: accessTokenData.email
            }
        })
        const { email, username, mobile, createdAt, updateAt } = userInfo.dataValues;
        return res.status(200).json({
            data: {
                userInfo: {
                    email: email,
                    username: username,
                    mobile: mobile,
                    createdAt: createdAt,
                    updateAt: updateAt
                }
            },
            message: '토큰인증이 성공했습니다.'

        })
    }
}