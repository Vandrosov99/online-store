const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  }

  try {
    const token = req.headers.authorization.split(" ")[1]; //Bearer asdasdasdasd
    console.log(req.headers);
    console.log(req.headers.authorization);
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "not authorized no token" });
    }
    console.log("decoded");
    const test =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImVtYWlsIjoic3RlQGdtYWlsLmNvbSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNjM0NzUwNDM5LCJleHAiOjE2MzQ4MjI0Mzl9.40VagA-bjDopD5KbqYx6Hm3LmaiFf6FwumBbDko8PpE";
    console.log("compare");
    console.log(token);
    console.log(test);
    console.log(test === token);
    const decoded = jwt.verify(test, "secret_key");

    console.log("decoded");
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      message: "not authorized bad token",
      err: error.message,
    });
  }
};
