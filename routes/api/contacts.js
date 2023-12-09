const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/contactControllers");

const { validateBody, isValidID, authenticate } = require("../../middlewares");

const schemas = require("../../schemas");

router.get("/", authenticate, controllers.listContacts);

router.get("/:contactId", authenticate, isValidID, controllers.getContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.addContact
);

router.delete(
  "/:contactId",
  authenticate,
  isValidID,
  controllers.removeContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidID,
  validateBody(schemas.updateSchema),
  controllers.updateStatusContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidID,
  validateBody(schemas.addSchema),
  controllers.updateById
);

module.exports = router;
