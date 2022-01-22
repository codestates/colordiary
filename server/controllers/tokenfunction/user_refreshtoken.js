require('dotenv').config();
const jwt = require('jsonwebtoken');
const { userinfo } = require('../../models');

const accessKey = process.env.ACCESS_SECRET;
const refreshKey = process.env.REFRESH_SECRET;

module.exports = (req, res) => {
    /*
    헤더 authorization 부분이 없는 요청 혹은 잘못된 토큰을 전달받은 경우, 응답에는 'invalid access token' 메세지가 포함되어야 합니다
    헤더 authorization 부분에 jwt 토큰이 존재하며 토큰에 유저정보가 담겨져 있는경우, 해당 유저의 정보를 리턴해야 합니다 
    */
   res.status(500).json({message: 'user_refreshtoken'})
}