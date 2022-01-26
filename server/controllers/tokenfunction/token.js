const { sign, verify } = require('jsonwebtoken');

module.exports = {
    generateToken: (data, tokenKey, time) => {
        
        // 어세스토큰발급, 리프레시토큰발급,
        const {email, username, mobile, createdAt, updatedAt} = data;
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

        /*
        검증
        jwt.verify(token, secretOrPublicKey, [options, callback])
        console.log("리퀘스트는 뭐가 들어오나요?",req);

        authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
        eyJlbWFpbCI6ImYiLCJ1c2VybmFtZSI6ImYiLCJtb2JpbGUiOiJmIiwiaW
        F0IjoxNjQzMTM5MDgxLCJleHAiOjE2NDMxOTkwODF9.6W9_tKWxgi-fmck
        kE9wN615fkPG9JZFEtKSTEsBrpwY
        */
        console.log("헤더 안에 들은건가요??",req.headers);
        console.log("바디에는 어떤 정보들이 오는건가요???",req.body);

        const headerAuth = req.headers['authorization'];

        console.log("클라이언트가 Bearer 토큰을 잘 보내줬나요??", headerAuth);

        if(!headerAuth){
            return null;
        } else{
            const auth = headerAuth.split(' ')[1];
            const tokenVerifier = verify(auth, tokenKey, {
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

