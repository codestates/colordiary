require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');
const tokenKey = process.env.ACCESS_SECRET;
const refreshKey = process.env.REFRESH_SECRET;

module.exports = {
    
        // const {username, email, mobile } = data //비밀번호 여기서 제외시켜주자
        // 어세스토큰발급, 리프레시토큰발급,
    generateToken: (data, tokenKey, time) => {
    
        // 어세스토큰발급, 리프레시토큰발급,
        const {email, username, mobile, createdAt, updatedAt} = data.dataValues;
        const tokenMaker = sign({
            email, username, mobile, createdAt, updatedAt
        }, tokenKey, { 
            algorithm: 'HS256', 
            expiresIn: time
        });
        return tokenMaker;
    },



    sendAccessToken: (res, refreshtoken) => {
        
        // 쿠키보내주고

    },

    isAuthorized: (req) => {

        // 검증
        
    }
}
