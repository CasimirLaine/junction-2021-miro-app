const { board } = window.miro;

async function init() {
  
  const data = {
    value1: "val1",
    value2: "val2"
    }
  await board.setAppData("variables", data)
  const appdata = await board.getAppData("variables")
  console.log(appdata)
  const stickyNote = await board.createStickyNote({
    content: JSON.stringify(appdata),
  });
  console.log(stickyNote)
  
  await board.viewport.zoomTo(stickyNote);

}
init();

