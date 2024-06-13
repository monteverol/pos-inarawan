const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.listen(5001, () => {
    console.log("Server has started on PORT 5001")
});