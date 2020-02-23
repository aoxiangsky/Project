const { login } = require("../controller/user");
const { SuccessModel, ErrorModel } = require("../model/resModel");
const { set } = require("../db/redis");

const handleUserRouter = (req, res) => {
  const method = req.method;

  if (method === "GET" && req.path === "/api/blog/login") {
    const { username, password } = req.query;
    // const { username, password } = req.body;    
    const result = login(username, password);
    return result.then(data => {
      if (data.username) {
        req.session.username = data.username;
        req.session.realname = data.realname;
        set(req.sessionId, req.session);
        return new SuccessModel(req.session);
      } else {
        return new ErrorModel("登录失败");
      }
    });
  }

  // if (method === "GET" && req.path === "/api/blog/login-test") {
  //   if (req.session.username) {
  //     return Promise.resolve(
  //       new SuccessModel({
  //         session: req.session
  //       })
  //     );
  //   }
  //   return Promise.resolve(new ErrorModel("尚未登录"));
  // }
};

module.exports = handleUserRouter;
