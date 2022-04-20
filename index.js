require('dotenv').config({ path: "./.env" })
const express =require("express");
const PORT = 5000;
const app = express();
const sequelize = require("./db");
const models = require("./models")

app.use(express.json());
app.post("/", (req, res) => {
    console.log(req.body);
    res.status(200).json("Server work123");
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log("server start"));
    }
    catch (e) {
        console.log(e)
    }
}

start();


