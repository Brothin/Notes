const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const adminDashboardController = require("../controllers/adminDashboardController");

/*
app routes 
*/
router.get("/", mainController.homepage);
router.get("/about", mainController.about);
router.get("/admin", mainController.admin);

router.get("/admin/dashboard", adminDashboardController.admindashboard);
router.get(
  "/admin/dashboard/item/:id",
  adminDashboardController.admindashboardViewNote
);
router.put(
  "/admin/dashboard/item/:id",
  adminDashboardController.admindashboardUpdateNote
);
router.delete(
  "/admin/dashboard/item-delete/:id",
  adminDashboardController.admindashboardDeleteNote
);
router.get(
  "/admin/dashboard/add",
  adminDashboardController.admindashboardAddNote
);
router.post(
  "/admin/dashboard/add",
  adminDashboardController.admindashboardAddNoteSubmit
);
router.get(
  "/admin/dashboard/search",
  adminDashboardController.admindashboardSearch
);
router.post(
  "/admin/dashboard/search",
  adminDashboardController.admindashboardSearchSubmit
);

module.exports = router;
