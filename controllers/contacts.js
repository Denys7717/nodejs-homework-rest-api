const { Contact } = require("../models/contact");
const { HttpError, controllerWrap } = require("../helpers");

const listContacts = async (req, res) => {
  const result = await Contact.find({}, "-createdAt -updatedAt");
  console.log(result);
  res.status(200).json(result);
};

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "contact deleted" });
};

const addContact = async (req, res) => {
  console.log(req.body);
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!req.body.favorite) {
    throw HttpError(400, "missing field favorite");
  }
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
  updateStatusContact: controllerWrap(updateStatusContact),
};
