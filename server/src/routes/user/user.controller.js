function httpGetUser(req, res) {
  const user = req.user;
  res.json(user);
}

module.exports = { httpGetUser };
