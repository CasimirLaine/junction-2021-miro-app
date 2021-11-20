import { findVariables } from './items.js';

const { board } = window.miro;

async function init() {
  const data = {
  }
  console.log('board in app.js', board)
  await board.setAppData("variables", data)
  const appdata = await board.getAppData("variables")
  console.log('appdata', appdata)
}
var variables = await findVariables()
console.log(variables)
init();
