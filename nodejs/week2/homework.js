import express from "express";
const app = express();
const port = process.env.PORT || 3000;
import jsonFile from "./documents.json" assert { type: "json" };

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.get("/search", (req, res) => {
  const searchTerm = req.query.q;
  if (searchTerm) {
    const result = jsonFile.filter((item) =>
      Object.values(item).some(
        (value) => typeof value === "string" && value.includes(searchTerm)
      )
    );

    console.log(JSON.stringify(result));
    res.send(JSON.stringify(result));
  } else {
    res.send(jsonFile);
  }
});

app.get("/documents/:id", (req, res) => {
  const id = req.params.id;

  function findId() {
    for (let i = 0; i < jsonFile.length; i++) {
      if (jsonFile[i].id === id) {
        return jsonFile[i];
      } else {
        continue;
      }
    }
  }
  const note = findId();
  if (note) {
    res.send(note);
  } else {
    res.status(404).send("Not found");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
