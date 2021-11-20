import axios from 'axios'
const { board } = window.miro;
import * as table from './table'

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
  const Appdata = await board.getAppData("variables")
  console.log(Appdata)
  /*
  axios.request(options).then(function (response) {
    console.log("Hoi")
    console.log(response.data);
    console.log(response.data.data.map(value => value.data))
  }).catch(function (error) {
    console.error(error);
  });
  */
}, 3000);

init();