module.exports = function (req, res, next) {
  if (req.session.admin) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
};
