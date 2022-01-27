// require('dotenv').config();
// const{ contents } = require('../../models');
// const { isAuthorized } = require('../tokenfunction/token');
// const accessKey = process.env.ACCESS_SECRET;
// const refreshKey = process.env.REFRESH_SECRET;

// module.exports =  {

  
  
//   //MyColor에서 보낸 데이터: date, mood, message
//   get: (req, res) => {
//     //다이어리 내용 조회
//     //req.cookies에 있는 토큰들 검증해서 true로 판명나면
//     //응답 데이터에 contents.date, mood, message를 돌려준다

//     // const { date, mood, message } = req.body;
//     // if( !date || !mood || !message){
//     //   return res.status(400).json({message: '내용이 없습니다.'})
//     // } else{
//     // }

//     isAuthorized(req, accessKey, 1 * 60 * 1000); 

//     res.status(200).json({message: 'color1'}) 
//   },

//   post: (req, res) => {

//     isAuthorized(req, accessKey, 1 * 60 * 1000); 
 
//     res.status(200).json({message: 'color2'}) 

//   },
//   put: (req, res) => {
//     res.status(200).json({message: 'color3'}) 

//   },
//   delete: (req, res)  => {
//     res.status(200).json({message: 'color4'}) 

//   }
// 
require('dotenv').config();
const{ contents } = require('../../models');
const{ userInfo } = require('../../models')
const { isAuthorized } = require('../tokenfunction/token');
const accessKey = process.env.ACCESS_SECRET;
const refreshKey = process.env.REFRESH_SECRET;

module.exports =  {

  //MyColor에서 보낸 데이터: date, content, icon
  //요청에 대한 응답: moodDate, message, icon
  get: async (req, res) => {
    //다이어리 내용 조회
    //req.cookies에 있는 토큰들 검증해서 true로 판명나면
    //응답 데이터에 contents.date, mood, message를 돌려준다

    const { email, date, content, icon } = req.body;
    if( !email || !date || !content || !icon){
      return res.status(404).json({message: '웹페이지를 표시할 수 없습니다..', data: null})
    } else{
      const auth = isAuthorized(req, accessKey, 1 * 60 * 1000)
      if(!auth){
        return res.status(404).json({message: '웹페이지를 표시할 수 없습니다..', data: null})
      }else{
        await userInfo.findOne({
          where:{
            email: email
          }
        }).then((result)=>{
          const id = result.id

          contents.findAll({
            where: {
              userInfo_id: id
            }
          }).then((data)=>{
            return res.status(201).json({message: '성공했습니다', data: data}) 
          })
        })
      }
    }
  },

  post: async (req, res) => {
    
    console.log(req.body,"+_+_+_++_+_+_+");
    const { email, date, content, icon } = req.body;
    if(!email || !date || !content || !icon){
      return res.status(404).json({message: '내용이 없습니다.', data: null})
    } else{
      const auth = isAuthorized(req, accessKey, 1 * 60 * 1000)
      if(!auth){
        return res.status(404).json({message: '웹페이지를 표시할 수 없습니다..', data: null})
      }else{
        await userInfo.findOne({
          where:{
            email: email
          }
        }).then((result)=>{
          const id = result.id

          contents.create({
            message: content,
            icon: icon,
            moodDate: date,
            userInfo_id: id
          }).then(()=>{
            return res.status(201).json({message: '성공했습니다'}) 
          })
        })
      }      
    }
  },
  put: async (req, res) => {

    console.log(req.body);
    const { email, date, content, icon } = req.body;
    if(!email || !date || !content || !icon){
      return res.status(404).json({message: '내용이 없습니다.', data: null})
    } else{
      const auth = isAuthorized(req, accessKey, 1 * 60 * 1000)
      if(!auth){
        return res.status(404).json({message: '웹페이지를 표시할 수 없습니다..', data: null})
      }else{
        await userInfo.findOne({
          where:{
            email: email
          }
        }).then((result)=>{
          const id = result.id

          contents.update({
            message: content,
            icon: icon,
            moodDate: date,
            userInfo_id: id
          }).then(()=>{
            return res.status(201).json({message: '성공했습니다', data: null}) 
          })
        })
      }      
    }
  },
  delete: async (req, res)  => {
    await contents.destroy({
      where: {
        id: req.body.id
      }
    }).then(()=>{
      res.status(205).json({message: '내용이 삭제되었습니다', data: null})
    })
  }
}