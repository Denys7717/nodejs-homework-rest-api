const express = require("express");

const router = express.Router();

const controllers = require("../../controllers/contacts");

const { validateBody, isValidID } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

router.get("/", controllers.listContacts);

router.get("/:contactId", isValidID, controllers.getContactById);

router.post("/", validateBody(schemas.addSchema), controllers.addContact);

router.delete("/:contactId", isValidID, controllers.removeContact);

router.patch(
  "/:contactId/favorite",
  isValidID,
  validateBody(schemas.updateSchema),
  controllers.updateStatusContact
);

router.put(
  "/:contactId",
  isValidID,
  validateBody(schemas.addSchema),
  controllers.updateById
);

module.exports = router;
