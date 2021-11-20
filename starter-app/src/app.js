const { board } = window.miro;

async function init() {
  var variables = await board.getAppData("variables");
  if (variables == null || variables == undefined || !variables) {
    await board.setAppData("variables", {})
  }
}
init();
