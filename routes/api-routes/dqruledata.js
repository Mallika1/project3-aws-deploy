const router = require("express").Router();
const dqruledataController = require("../../controllers/dqruledataController");

router.route("/submitRecord").post(dqruledataController.submitRecord);

router.route("/DQRuleList/:offset").get(dqruledataController.DQRuleList);

router.route("/deleteDQRuleData").post(dqruledataController.deleteDQRuleData);
module.exports = router;
