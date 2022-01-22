require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');
const accessKey = ACCESS_SECRET;
const refreshKey = REFRESH_SECRET;

module.exports = {
    generateAccessToken: (data) => {
        
        // 어세스토큰발급, 리프레시토큰발급,

    },

    sendAccessToken: (res, refreshtoken) => {
        
        // 쿠키보내주고

    },

    isAuthorized: (req) => {

        // 검증
        
    }
}
