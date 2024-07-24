//requiring
const jwt = require("jsonwebtoken");
const UsersData = require("../Models/RegisterSchema");

//using
//this is for user get
const forUserAuth = async (req, res, next) => {
  const token = req.header("Authorization");

  try {
    if (!token) {
      res.status(401).json({ msg: "please login or register" });
    } else {
      const forToken = token.replace("Bearer", "").trim();
      const verifyToken = await jwt.verify(forToken, process.env.SECRETEKEY);
      const findUser = await UsersData.findOne({
        email: verifyToken.email,
      }).select({ password: 0 });

      req.user = findUser;
      req.token = token;
      next();
    }
  } catch (err) {
    res.status(500).json({ msg: "server error in user get function", err });
  }
};

//exporting
module.exports = forUserAuth;
