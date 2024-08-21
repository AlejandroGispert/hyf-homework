import knex from "knex";
const knexInstance = knex({
  client: "mysql2",
  connection: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "pass",
    database: process.env.DB_NAME || "hyf_node_week3_warmup",
    multipleStatements: true,
  },
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const apiRouter = express.Router();
app.use("/api", apiRouter);

const contactsAPIRouter = express.Router();
apiRouter.use("/contacts", contactsAPIRouter);

//VULNERABLE TO INJECTION ATTACKS
contactsAPIRouter.get("/", async (req, res) => {
  let query = knexInstance.select("*").from("contacts");

  const sanitizedOrderBy = knexInstance.raw("??", [orderBy]); // Escaping identifiers query = query.orderByRaw(sanitizedOrderBy);

  const allowedSortFields = ["first_name", "email", "phone"];

  if ("sort" in req.query) {
    const orderBy = req.query.sort.toString();
    if (/^[a-zA-Z_]+$/.test(orderBy) && allowedSortFields.includes(orderBy)) {
      query = query.orderBy(sanitizedOrderBy);
    }
  }

  console.log("SQL", query.toSQL().sql);

  try {
    const data = await query;
    res.json({ data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
