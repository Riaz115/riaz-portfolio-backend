const express = require("express");
const router = express.Router();
const AdminController = require("../../Controllers/AdminControllers/AdminControllers");
const UserAuth = require("../../MiddleWares/UserAuth");
const adminAuth = require("../../MiddleWares/AdminAuth");

//routing

//for get
router
  .route("/admin/contacts")
  .get(UserAuth, adminAuth, AdminController.forGetContact);
router
  .route("/admin/getUser")
  .get(UserAuth, adminAuth, AdminController.forGetUsers);
router
  .route("/admin/services/:id/update")
  .get(UserAuth, adminAuth, AdminController.getForUpdateServices);
router
  .route("/admin/user/:id/update")
  .get(UserAuth, adminAuth, AdminController.forUserGet);

//for post
router
  .route("/admin/services")
  .post(UserAuth, adminAuth, AdminController.createService);

//for update
router
  .route("/admin/services/:id")
  .patch(UserAuth, adminAuth, AdminController.forServiceUpdate);
router
  .route("/admin/user/:id")
  .patch(UserAuth, adminAuth, AdminController.forUserUpdate);

//for delete
router
  .route("/admin/service/:id")
  .delete(UserAuth, adminAuth, AdminController.forServiceDelete);
router
  .route("/admin/user/:id")
  .delete(UserAuth, adminAuth, AdminController.forUserDelete);
router
  .route("/admin/contacts/:id")
  .delete(UserAuth, adminAuth, AdminController.forContactDelete);

//exporting
module.exports = router;
