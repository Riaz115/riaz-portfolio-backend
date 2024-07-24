const express = require("express");
const router = express.Router();
const PagesControllers = require("../../Controllers/PagesControllers/PagesController");
const userAuth = require("../../MiddleWares/UserAuth");

//routing

//get
router.route("/").get(PagesControllers.home);
router.route("/services").get(PagesControllers.forGetServices);
router.route("/authUser").get(userAuth, PagesControllers.forUserGet);

//post

router.route("/register").post(PagesControllers.register);
router.route("/login").post(PagesControllers.login);
router.route("/contact").post(userAuth, PagesControllers.forContacts);

//exporting
module.exports = router;
