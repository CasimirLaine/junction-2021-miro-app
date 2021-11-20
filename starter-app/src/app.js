import { findVariables } from "./items.js";
const { board } = window.miro;

async function init() {
  const variable = "variable1"
  const data = {
<<<<<<< HEAD
    variable: "val1",
    value2: "val2"
=======
    variable: "variableName",
    value: "variableValue"
>>>>>>> main
  }
  console.log('board in app.js', board)
  await board.setAppData("variables", data)
  const appdata = await board.getAppData("variables")
<<<<<<< HEAD
  console.log(appdata)
=======
  console.log('appdata', appdata)

  printFunction()
>>>>>>> main
  const stickyNote = await board.createStickyNote({
    content: "Hello, from prod",
  });
  console.log(stickyNote)

  await board.viewport.zoomTo(stickyNote);
}
async function variables() {

  var variables = await findVariables()
  console.log(variables)
}
variables();
init();
const table = document.getElementById('vtable');
<<<<<<< HEAD
console.log(table)
=======
console.log(table)


>>>>>>> main
