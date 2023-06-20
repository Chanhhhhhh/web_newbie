class SiteController {
  // [get] /home
  index(req, res) {
    res.render("home");
  }

  // [get] /search
  show(req, res) {
    res.send("Search con me may di");
  }
}

module.exports = new SiteController();
