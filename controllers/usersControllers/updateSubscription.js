const { User } = require("../../models/user");
const { HttpError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const result = await User.findByIdAndUpdate(_id, {
    subscription,
  });
  if (!req.body.subscription) {
    throw HttpError(400, "missing field subscription");
  }
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({ message: "subscription changed" });
};

module.exports = updateSubscription;
