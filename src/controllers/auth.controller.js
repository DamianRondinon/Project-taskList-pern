export const signin = (req, res) => res.send("Logging in");

export const signup = (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  return res.send("registrando");
};

export const signout = (req, res) => res.send("Logging out");

export const profile = (req, res) => res.send("User profile");
