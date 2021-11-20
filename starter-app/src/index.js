import axios from 'axios'
import { mistyrose } from 'color-name';
const { board } = window.miro;
import { periodic } from './table.js'

async function init() {
  await miro.board.ui.on("icon:click", async () => {
    await miro.board.ui.openPanel({
      // Absolute or relative URL of the page whose content you want to display inside the panel      
      pageUrl: "app.html"
    });
  });
}

const options = {
  method: 'GET',
  url: 'https://sheltered-savannah-34228.herokuapp.com/https://api.miro.com/v2/boards/o9J_lhnZ4CE%3D/widgets?limit=50',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer Vqzj_BDeXukWefLeX3uWguYSyeg'
    }
};

 setInterval(async function(){ 
   console.log(window.localStorage)
    periodic();

    }, 3000);
init();