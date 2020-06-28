const express = require("express");
const cors = require("cors");
const app = express();
const port = 2000;

const state = {};

const setState = (key, value) => {
  state[key] = value;
};
const getState = (key) => state[key];

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello World!"));
app.post("/setState", (req, res) => {
  const { bubu, bibizyaka } = req.body;
  if (!bubu) {
    console.log(req.body);
    res.send({
      success: false,
    });
    return;
  }
  setState(bubu, bibizyaka);
  res.send({
    success: true,
    data: state[bubu],
  });
});
app.get("/getState", (req, res) => {
  const { key } = req.query;
  res.send({
    success: true,
    data: getState(key) || null,
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
