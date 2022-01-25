const { sign, verify } = require('jsonwebtoken');


module.exports = {
    generateToken: (data, tokenKey, time) => {
        
        // 어세스토큰발급, 리프레시토큰발급,
        const {email, username, mobile, createdAt, updatedAt} = data
        const tokenMaker = sign({
            email, username, mobile, createdAt, updatedAt
        }, tokenKey, { 
            algorithm: 'HS256', 
            expiresIn: time
        });
        return tokenMaker;
    },

    sendRefreshToken: (res, refreshtoken) => {
        
        // 쿠키보내주고
        //res.cookie(name, value [, options ])
        return res.cookie('jwt', refreshtoken, {
            domain: 'localhost',
            path: '/',
            maxAge: 5 * 60 * 1000,
            httpOnly: true,
            sameSite: 'None',
            secure: true,
        });
    },

    isAuthorized: (req, tokenKey, time) => {

        // 검증
        //jwt.verify(token, secretOrPublicKey, [options, callback])
        const headerAuth = req.cookies.jwt

        if(!headerAuth){
            return null;
        } else{
            const tokenVerifier = verify(headerAuth, tokenKey, {
                algorithm: 'HS256',
                expiresIn: time
            }, (err, decoded) => {
                if(err){
                    console.log("토큰 검증과정 중 에러발생", err)
                } else{
                    return decoded;
                }
            });
            return tokenVerifier;
        }
        
    }
}

