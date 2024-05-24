function httpLogout(req, res) {
  req.logout(() => {
    res.redirect("/");
  });
}

module.exports = {
  httpLogout,
};
