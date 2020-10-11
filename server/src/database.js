const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/mea(n-employees", {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false
    })
    .then(db => console.log("Base de datos Conectada"))
    .catch(err => console.error(err));