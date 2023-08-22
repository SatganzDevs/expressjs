import express from "express";
import cors from "cors";
import morgan from "morgan";
import { fileURLToPath } from "url";
import path from "path";


import helloRoute from "./routes/helloRouter.js";
import apiRoute from "./routes/api.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

app.use(express.static(path.join(__dirname, 'src/views')));


// parse json request body
app.use(express.json());

// enable cors
app.use(cors());

// request logger middleware
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  const targetURL = "https://docs.api.satganzdevs.cloud"; 
  res.redirect(targetURL);
});


app.use("/hello", helloRoute);
app.use("/api", apiRoute);

// // custom middleware
// app.use(middleware.unknownEndpoint);
// app.use(middleware.errorHandler);

export default app;
