const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const users = [];
const login = [];

app.post("/users", (req, res) => {
  const { name, email, password } = req.body;

  const user = { name, email, password };

  users.push(user);

  return res.json(user);
});

app.get("/users", (req, res) => {
  return res.json(users);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  if (user.password !== password) {
    return res.status(400).json({ error: "Invalid password" });
  }

  const session = { user };

  login.push(session);

  return res.json(session);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
