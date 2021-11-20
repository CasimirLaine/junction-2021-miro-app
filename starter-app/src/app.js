import { findVariables } from './items.js';

const { board } = window.miro;

async function init() {
  const data = {
    value1: "val1",
    value2: "val2"
  }
  await board.setAppData("variables", data)
  const appdata = await board.getAppData("variables")
  console.log(appdata)

  printFunction()
  const stickyNote = await board.createStickyNote({
    content: "Hello, World from Ray, ornot, is it !",
  });
  console.log(stickyNote)

  await board.viewport.zoomTo(stickyNote);
}
var variables = await findVariables()
console.log(variables)
init();
const table = document.getElementById('vtable');
console.log(table)


