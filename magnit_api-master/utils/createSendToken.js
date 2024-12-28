const jwt = require("jsonwebtoken");

const signToken = (id) => {
  return jwt.sign({ id }, "DRKYx$LSRX#yo3qCn2BuxQK4@FSd6$", {
    expiresIn: "24h",
  });
};

exports.createSendToken = (user, statusCode, res) => {
  const token = signToken(user.uuid);

  res.cookie("jwt", token, {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  });

  res.status(statusCode).json({ token });
};
