const { controllerWrap } = require("../../helpers");
const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const updateById = require("./updateById");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  listContacts: controllerWrap(listContacts),
  getContactById: controllerWrap(getContactById),
  removeContact: controllerWrap(removeContact),
  addContact: controllerWrap(addContact),
  updateById: controllerWrap(updateById),
  updateStatusContact: controllerWrap(updateStatusContact),
};
