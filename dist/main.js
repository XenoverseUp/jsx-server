/** @jsx pragma */
const {
  pragma,
  App,
  Router,
  Get,
  Post,
  Delete,
  Put
} = require("./pragma");

const app = pragma(App, null, pragma(Get, {
  path: "/",
  handler: (req, res) => res.send("Hi bitch! I'm aliveeee :)")
}), pragma(Router, {
  path: "/b"
}, pragma(Get, {
  path: "/a",
  handler: (req, res) => res.send("Nested one heree!")
})));
app.listen(3000, () => console.log("I am up and running at http://localhost:3000..."));