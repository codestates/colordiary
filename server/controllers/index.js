module.exports = {

  login: require('./users/login'),
  signup: require('./users/signup'),
  user_delete: require('./users/user_delete'),
  user_logout: require('./users/user_logout'),
  user_accesstoken: require('./tokenfunction/user_accesstoken'),
  user_refreshtoken: require('./tokenfunction/user_refreshtoken'),
  user_mycolor: require('./mycolor/user_mycolor')
}