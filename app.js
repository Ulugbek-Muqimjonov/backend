const experess = require("express");

const mongoose = require("mongoose");
const postModel = require("./models/post.model");
const app = experess();

const PORT = 8080;

const DB_URL =
  "mongodb+srv://ulugbek:ulugbek0676@backend.kr8btwr.mongodb.net/?retryWrites=true&w=majority&appName=backend";
app.use(experess.json());

app.get("/", async(req, res) => {
  try {
    const allPost = await postModel.find();
    res.status(200).json(allPost);
  } catch (error) {
    res.status(500).json(error);
  }
});
app.post("/", async (req, res) => {
  try {
    const { title, body } = req.body;
    const newPost = await postModel.create({ title, body });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error.body.message);
  }
});

const appStart = async () => {
  try {
    await mongoose.connect(DB_URL).then(() => console.log("Server Connected"));
    app.listen(PORT, () => {
      console.log(`server is listen port :${PORT}`);
    });
  } catch (error) {
    console.log(`Error with connecting db -${error}`);
  }
};

appStart();
