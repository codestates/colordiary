require('dotenv').config();
const { userInfo } = require('../../models');
const { generateToken, sendRefreshToken } = require('../tokenfunction/token');
const accessKey = process.env.ACCESS_SECRET;
const refreshKey = process.env.REFRESH_SECRET;
<<<<<<< HEAD
=======

>>>>>>> 9342f6fafe461d35d15d36f256172d1238bdfaf3
module.exports =  async (req, res) => {
    const {email, password, username, mobile} = req.body
    console.log(req.body)
   //이게 하나라도 안들어오면 로그인거부
   // 다들어왔는데 db에 정보(같은이메일)가 있으면 거부
   // 안들어오면 만들어주고 토큰 두개 다 발급
<<<<<<< HEAD
    if (!email || !password || !username || !mobile) {
        res.status(422).json({message: '정보가 다 입력되지 않았습니다.', data: null})
    } else {
        const [user,created]  = await userInfo.findOrCreate({
            where: {email: req.body.email},
            defaults: {
              username, password, mobile, email
            }
          })
            // console.log("데이터베이스에 잘 추가됐나???", users)
            if(!created){
              return res.status(409).json({message: '이미 존재하는 아이디입니다.', data: null});
            } else{
              console.log(created)
              const accesstoken = generateToken(req.body, accessKey, 1 * 60 * 1000);
              const refreshtoken =  generateToken(user, refreshKey, 5 * 60 * 1000);
              sendRefreshToken(res, refreshtoken);
              return res.status(201).send({message: '회원가입이 완료되었습니다.', data: accesstoken});
            }
          
        }
       /* const [user, created] =  await userInfo.findOrCreate({where: {
            email
        }, 
        default: {
            password,
            username,
            mobile
        }        
        })

        if (!created) {
            res.send(409).json({message: '이미 존재하는 아이디입니다.', data: null})
        } else {
           const token = generateToken(user)

        }
    } */

   
   
    // res.status(500).json({message: 'signup'})

}
=======
  if (!email || !password || !username || !mobile) {
      res.status(422).json({message: '정보가 다 입력되지 않았습니다.', data: null})
  } else {
    await userInfo.findOrCreate({
      where: {email: req.body.email},
      defaults: {
        username, email, password, mobile
      }
    }).then(([user, created])=>{
      // console.log("데이터베이스에 잘 추가됐나???", users)
      if(!created){
        return res.status(409).json({message: '이미 존재하는 아이디입니다.', data: null});
      } else{
        const accesstoken = generateToken(req.body, accessKey, 1 * 60 * 1000);
        const refreshtoken = generateToken(req.body, refreshKey, 5 * 60 * 1000);
        sendRefreshToken(res, refreshtoken);//쿠키로 보내는건 리프레시토큰
        //console.log('토큰은 제대로 만들어 졌습니까????',`authorization: Bearer ${accesstoken}`)
        return res.status(201).send({message: '회원가입이 완료되었습니다.', data: accesstoken});
      }
    })
  }
}
/* 콘솔로그 결과
토큰은 제대로 만들어 졌습니까???? 
authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJlbWFpbCI6ImYiLCJ1c2VybmFtZSI6ImYiLCJtb2JpbGUiOiJmIiwiaW
F0IjoxNjQzMTM5MDgxLCJleHAiOjE2NDMxOTkwODF9.6W9_tKWxgi-fmck
kE9wN615fkPG9JZFEtKSTEsBrpwY
*/
>>>>>>> 9342f6fafe461d35d15d36f256172d1238bdfaf3
