import { findVariables } from './items.js';

const { board } = window.miro;

async function init() {
  const stickyNote = await board.createStickyNote({
    content: "Hello, World!",
  });

  await board.viewport.zoomTo(stickyNote);
}
var variables = await findVariables()
console.log(variables)
init();
