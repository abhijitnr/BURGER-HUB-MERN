import app from "./app.js";
import { connectDB } from "./config/database.js";

connectDB();

app.get("/", (req, res, next) => {
  res.send(`<h1>WELCOME TO BURGER-HUB BACKEND</h1>`);
});

// Listen server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
