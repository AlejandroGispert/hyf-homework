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
      const item = jsonFile[i];
      const keys = Object.keys(item);

      if (item.id.toString() === id) {
        console.log(item);
        return item;
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

app.post("/search", (req, res) => {
  const searchTermQuery = req.query.q;
  const searchTermField = req.query.fields;

  if (searchTermQuery && searchTermField) {
    return res.status(400).send("Bad Request, both queries can't be provided");
  }

  if (searchTermField) {
    function findFields() {
      for (let i = 0; i < jsonFile.length; i++) {
        const item = jsonFile[i];
        const keys = Object.keys(item);

        for (let j = 0; j < keys.length; j++) {
          const key = keys[j];
          console.log(key);
          const value = item[key];
          //   console.log(item[key]);
          if (typeof key === "string" && key === searchTermField) {
            return { fields: { [key]: value } };
          }
        }
      }
      return;
    }

    const fieldResult = findFields();
    return res.send(fieldResult);
    if (fieldResult) {
      console.log(fieldResult);
      return res.send(fieldResult);
    } else {
      return res.status(404).send("No matches found for the specified field");
    }
  }

  if (searchTermQuery) {
    const result = jsonFile.filter((item) =>
      Object.values(item).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTermQuery.toLowerCase())
      )
    );

    if (result.length > 0) {
      console.log(JSON.stringify(result));
      return res.send(result);
    } else {
      return res.status(404).send("No matches found for the specified query");
    }
  }

  // If neither searchTermField nor searchTermQuery is provided, return the full JSON file
  res.send(jsonFile);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
