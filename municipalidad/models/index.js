var clientSchema = require("./client");

module.exports = (app, mongoose) => {
  let Client = mongoose.model("Client", clientSchema);
  return {Client};
}
