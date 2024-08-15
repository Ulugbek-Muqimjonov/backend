const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  // res.send("Hello Ulug'bek ")
  res.status(200).send("ULugbek");
});
app.post("/", (req, res) => {
  const { firstName, lastName } = req.body;
  res.send(`HIS fullName - ${firstName} ${lastName}`);
});
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(id);
});
app.put("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    id,
    body,
  });
});
const PORT = 8080;
app.listen(PORT, () => console.log(`Listen on - http://localhost:${PORT}`));
