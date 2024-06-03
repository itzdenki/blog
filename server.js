const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const blogRoute = require("./routes/blogs");
const Blog = require("./models/Blog");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use('/public', express.static('public'))

mongoose.connect(
  process.env.CONNECTION_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    console.log(err || "Connected to MongoDB");
  }
);

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const blogs = await Blog.find().sort({ timeCreated: "desc" });
  res.render("index", { blogs: blogs });
});
app.use(express.static("public"));
app.use("/blogs", blogRoute);

var port = process.env.PORT || 8080;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server listening on port http://localhost:${port}`);
});

