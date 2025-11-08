const { model } = require("mongoose");

const { SellsSchema } = require("../schemas/SellsSchema");

const SellsModel = new model("sell", SellsSchema);

module.exports = { SellsModel };
