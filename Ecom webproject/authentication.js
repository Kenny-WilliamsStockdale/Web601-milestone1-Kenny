// authenticate user
const userAuth = async (req, res) => {
    try {
      var session;
      // check if username password correct.
      const __user = await User.findOne({ email: req.body.email });
      if (__user == null) {
        throw "Invalid User. Create new user.";
      }
      // match user role and login page
      if (!__user.roles.includes("customer")) {
        throw "Permission Issue";
      }
      var token = "";
      // match password
      if (!bcrypt.compareSync(req.body.password, __user.password)) {
        throw "Invalid Password";
      } else {
        // TODO sign the create JWT here
        token = jwt.sign({ id: __user._id }, req.app.get("secretKey"), {
          expiresIn: "1h",
        });
        // save userid, name, token in session
        session = req.session;
        session.userId = __user.id;
        session.name = __user.firstName + " " + __user.lastName;
        session.token = token;
      }
      // redirect to home page
      res.redirect("/product/home");
    } catch (error) {
      console.error(error);
      return res.render("../views/pages/login", { message: error });
    }
  };