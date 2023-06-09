const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.aczb5xl.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
    const db = await mongoose.connect(uri)
    console.log("DB online", db.Connection.name)
  } catch (error) {
    console.log(error);
    throw new Error("Error en la base de datos - Hable con el admin");
  }
};

module.exports = {
  dbConnection,
};
