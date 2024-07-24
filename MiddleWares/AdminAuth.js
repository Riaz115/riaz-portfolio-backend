const forAdminAuth = async (req, res, next) => {
  try {
    const admin = req.user.isAdmin;
    if (!admin) {
      res.status(401).json({ msg: "you are not admin" });
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({ msg: "there is error in thr admin middleware" });
  }
};

module.exports = forAdminAuth;
