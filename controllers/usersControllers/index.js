const register = require("./regisiter");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const { controllerWrap } = require("../../helpers");

module.exports = {
  register: controllerWrap(register),
  login: controllerWrap(login),
  getCurrent: controllerWrap(getCurrent),
  logout: controllerWrap(logout),
  updateSubscription: controllerWrap(updateSubscription),
};
