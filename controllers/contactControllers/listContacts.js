const { Contact } = require("../../models/contact");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite = false } = req.query;
  const skip = (page - 1) * limit;

  if (favorite) {
    const result = await Contact.find(
      {
        owner,
        favorite,
      },
      "-createdAt -updatedAt",
      {
        skip,
        limit,
      }
    ).populate("owner", " name email");
    return res.status(200).json(result);
  }
  const result = await Contact.find(
    {
      owner,
    },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  ).populate("owner", " name email");
  res.status(200).json(result);
};

module.exports = listContacts;
