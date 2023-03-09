// const Bunny = require("./scripts/bunny");
// import Bunny from "./scripts/bunny";
import Example from "./scripts/example";



// const bunny = new Bunny();
// bunny.show();

document.addEventListener("DOMContentLoaded", () => {
  // console.log("Hello, world")
  const main = document.getElementById("main")
  new Example(main);
})

