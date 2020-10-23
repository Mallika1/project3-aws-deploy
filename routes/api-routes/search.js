const router = require("express").Router();
const searchController = require("../../controllers/searchController");

router.route("/searchrestaurant").post(searchController.searchrestaurant);
router.route("/searchbyid:id").get(searchController.searchbyid);
module.exports = router;
