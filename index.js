import express, { urlencoded } from "express";
import routes from "./routes/index.js";
import bodyParser from 'body-parser';
import database from "./dataBase/db.js";

const app = express();
const PORT = 5008


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/", routes)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})