const express = require("express");
const notes = require("./data/notes");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Api started");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const filteredNotes = notes.find((n) => n._id === req.params.id);
  res.send(filteredNotes);
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
