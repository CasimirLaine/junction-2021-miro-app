const { board } = window.miro;
import { saveVariables, loadVariables } from "./items.js"

async function init() {
  try {
    var variables = loadVariables()
  } catch(error) {
    console.log(error)
  }  
  if (variables == null || variables == undefined || !variables) {
    console.log("Inited app data with empty variable table.")
    saveVariables({})
  }
}
init();
