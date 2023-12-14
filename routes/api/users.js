const express = require("express");

const controllers = require("../../controllers/usersControllers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const schemas = require("../../schemas");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.userSchema),
  controllers.register
);

router.post("/login", validateBody(schemas.userSchema), controllers.login);

router.get("/current", authenticate, controllers.getCurrent);

router.post("/logout", authenticate, controllers.logout);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.subscriptionSchema),
  controllers.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  controllers.updateAvatar
);

module.exports = router;
