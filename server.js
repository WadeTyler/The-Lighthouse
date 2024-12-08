
import express from 'express';
import path from 'path';
import { dirname } from 'path';
const app = express();

const __dirname = dirname("index.html");

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.render("index.html");
});

app.listen(5022, () => {
  console.log("The Lighthouse Server listening on port 5022");
});