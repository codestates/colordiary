require('dotenv').config();
const { userInfo } = require('../../models');
const { generateToken, sendRefreshToken } = require('../tokenfunction/token');
const accessKey = process.env.ACCESS_SECRET;
module.exports =  async (req, res) => {
    const {email, password, username, mobile} = req.body
    console.log(req.body)
   //이게 하나라도 안들어오면 로그인거부
   // 다들어왔는데 db에 정보(같은이메일)가 있으면 거부
   // 안들어오면 만들어주고 토큰 두개 다 발급
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
              sendRefreshToken(res, accesstoken);
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