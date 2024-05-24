function checkLoggedIn(req, res, next) {
  const isAuthenticated = req?.isAuthenticated() && req?.user?.id;

  if (!isAuthenticated) {
    return res
      .status(401)
      .json({ errors: ["Login to perform this operation"] });
  }
  next();
}

module.exports = { checkLoggedIn };
