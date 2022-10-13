exports.sayHello = (req, res) => {
  res.json({ message: "Hello NodeJS" });
};

exports.signUp = (req, res) => {
  res.json({ message: "This is Sign up page." });
};

exports.signIn = (req, res) => {
  res.json({ message: "This is Sign in page." });
};
