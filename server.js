const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes); // add routes for api

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dad-jokes", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

require('./models/index')

app.use(require('./routes/index'))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
