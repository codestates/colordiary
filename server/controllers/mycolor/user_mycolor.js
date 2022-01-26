require('dotenv').config();
const{ contents } = require('../../models');
const { isAuthorized } = require('../tokenfunction/token');
const accessKey = process.env.ACCESS_SECRET;
const refreshKey = process.env.REFRESH_SECRET;

module.exports = {

  
  
  //MyColor에서 보낸 데이터: date, mood, message
  get: (req, res) => {
    // isAuthorized(req, accessKey, 1 * 60 * 1000);

    // const { date, mood, message } = req.body;
    // if( !date || !mood || !message){
    //   return res.status(400).json({message: '내용이 없습니다.'})
    // } else{
    // }
    isAuthorized(req, accessKey, 1 * 60 * 1000); 

  }
  // res.status(200).json({message: 'color'}) 
  // get: (req, res) => {
  //   //다이어리 내용 조회
  //   //req.cookies에 있는 토큰들 검증해서 true로 판명나면
  //   //응답 데이터에 contents.date, mood, message를 돌려준다
    
  //   res.status(200).json({message: 'color1'}) 

  // },
  // post: (req, res) => {
  //   res.status(200).json({message: 'color2'}) 

  // },
  // put: (req, res) => {
  //   res.status(200).json({message: 'color3'}) 

  // },
  // delete: (req, res)  => {
  //   res.status(200).json({message: 'color4'}) 

  // }
}