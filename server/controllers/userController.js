const ApiError = require("../error/ApiError");

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async authCheck(req, res, next) {
    const { id } = req.query;

    if (!id) {
      return next(ApiError.badRequest("не задан id"));
    }

    res.status(200).json(query);
  }
}

module.exports = new UserController();
