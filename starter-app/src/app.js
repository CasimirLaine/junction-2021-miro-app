import { findVariables, setVariables } from './items.js';

const { board } = window.miro;

async function init() {
  const appdata = await board.getAppData("variables")
  console.log('appdata', appdata)
}
init();
