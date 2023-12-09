const Joi = require("joi");

const subscriptionSchema = Joi.object({
  subscription: Joi.string().required().valid("starter", "pro", "business"),
});

module.exports = subscriptionSchema;
