import { findVariables } from './items.js';

const { board } = window.miro;

async function init() {
  console.log('hello world')
  printFunction()
  const stickyNote = await board.createStickyNote({
    content: "Hello, World from Ray, ornot, is it !",
  });

  await board.viewport.zoomTo(stickyNote);
}
var variables = await findVariables()
console.log(variables)
init();
const table = document.getElementById('vtable');
console.log(table)


