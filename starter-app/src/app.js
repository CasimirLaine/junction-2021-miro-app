const { board } = window.miro;

async function init() {
  var variables = window.variables;
  if (variables == null || variables == undefined || !variables) {
    console.log("Inited app data with empty variable table.")
    window.variables = {}
  }
}
init();
