const ApiError = require("../error/ApiError");

module.exports = (err, req, res, next) => {
  if (err instanceof ApiError) {
    console.log("ERROR ASDASDASd");
    return res.status(err.status).json({ message: err.message });
  }

  res.status(500).json({ message: "something went wrong(unfixed)" });
};
