const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/magesDB");

const BugsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    steps: {
        type: String,
        require: true
    }
})

const Bugs = new mongoose.model("Bugs", BugsSchema)

const mage_1 = new Bugs({
    name: "505",
    description: "HTTP Version Not Supported",
    status: "505"


});

mage_1.save();
