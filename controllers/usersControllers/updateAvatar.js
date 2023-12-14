const path = require("path");
const { User } = require("../../models/user");
const Jimp = require("jimp");
const { HttpError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  if (!req.file) {
    throw HttpError(400, "Please attach the file!");
  }
  const { path: tempUpload, originalname } = req.file;

  const resultName = `${_id}_${originalname}`;

  await Jimp.read(tempUpload)
    .then((tempUpload) => {
      tempUpload
        .resize(250, 250)
        .quality(60)
        .greyscale()
        .write(path.join(avatarsDir, resultName));
    })
    .catch((err) => {
      throw HttpError(500, err);
    });

  const avatarURL = path.join("avatars", resultName);
  await User.findByIdAndUpdate(_id, { avatarURL });
  res.json({ avatarURL });
};

module.exports = updateAvatar;
