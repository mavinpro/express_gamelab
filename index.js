// import express
import express from "express";
// gunakan import router untuk memanggil modul file routes.js
import Router from "./routes/routes.js";

const app = express();
const port = 3000;

app.get(
  "/",
  (req, res, next) => {
    // Middleware 1
    console.log("Ini adalah middleware 1");
    next();
  },
  (req, res, next) => {
    // Middleware 2
    console.log("Ini adalah middleware 2");
    req.name = "sdfdsfsdfsdf";
    next();
  },
  (req, res, next) => {
    // Middleware 3
    console.log("Ini adalah middleware 3");
    const err = {
      status: "error",
      data: {
        name: req.name,
      },
    };
    next(err);
  },
  (req, res, next) => {
    // Middleware 4
    console.log("Ini adalah middleware 4");
  }
);

// error handler
app.use((error, req, res, next) => {
  res.json(error);
});
// Gunakan Router
app.use(Router);

app.listen(port, () => {
  console.log(`Server ini berjalan di http://localhost:${port}`);
});
