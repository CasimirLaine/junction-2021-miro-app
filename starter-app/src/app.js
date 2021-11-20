import { findVariables } from "./items.js";
const { board } = window.miro;

async function init() {
  const variable = "variable1"
  const data = {
    variable: "variableName",
    value: "variableValue"
  }
  console.log('board in app.js', board)
  await board.setAppData("variables", data)
  const appdata = await board.getAppData("variables")
  console.log('appdata', appdata)

  printFunction()
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
console.log(table)


