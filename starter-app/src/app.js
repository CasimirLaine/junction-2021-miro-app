const { board } = window.miro;

async function init() {
  console.log('hello world')
  printFunction()
  const stickyNote = await board.createStickyNote({
    content: "Hello, World from Ray, ornot, is it !",
  });

  await board.viewport.zoomTo(stickyNote);
}

init();
const table = document.getElementById('vtable');
console.log(table)


