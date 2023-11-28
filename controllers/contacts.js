const contacts = require("../models/contacts");
const { HttpError, controllerWrap } = require("../helpers");

const listContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.status(200).json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

const addContact = async (req, res) => {
  console.log(req.body);
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.updateById(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

module.exports = {
  listContacts: controllerWrap(listContacts),
  getContactById: controllerWrap(getContactById),
  removeContact: controllerWrap(removeContact),
  addContact: controllerWrap(addContact),
  updateById: controllerWrap(updateById),
};
