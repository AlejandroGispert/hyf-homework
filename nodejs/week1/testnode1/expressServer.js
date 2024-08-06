import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hello/:name", (req, res) => {
  res.send("Hello " + req.params.name);
});

app.get("/add10/:number", (req, res) => {
  res.send("Result " + (parseInt(req.params.number) + 10));
});

app.get("/add/:number1/:number2", (req, res) => {
  res.send(
    "Result = " + (parseInt(req.params.number1) + parseInt(req.params.number2))
  );
  console.log(req.params.number1);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
