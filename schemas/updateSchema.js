const Joi = require("joi");

const updateSchema = Joi.object({
  favorite: Joi.boolean(),
});

module.exports = updateSchema;
