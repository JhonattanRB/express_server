// server express:

const express = require("express");
const PORT = 3001;
const app = express();

const tasks = [
  { id: "123456", isCompleted: false, description: "Walk the dog" },
  {
    id: "789012",
    isCompleted: true,
    description: "Learn Node Js y Express",
  },
  {
    id: "345678",
    isCompleted: false,
    description: "Create a server using Express",
  },
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

//middleware
app.use((req, res) => {
  res.status(404).send("404 NOT FOUND");
});

app.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
