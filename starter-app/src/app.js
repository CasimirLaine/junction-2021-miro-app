import axios from 'axios'
const { board } = window.miro;

async function init() {
  
  const data = {
    value1: "val1",
    value2: "va"
    }
  await board.setAppData("variables", data)
  const appdata = await board.getAppData("variables")
  console.log(appdata)
  const stickyNote = await board.createStickyNote({
    content: JSON.stringify(appdata),
  });
  console.log(stickyNote)
  
  await board.viewport.zoomTo(stickyNote);


const options = {
  method: 'GET',
  url: 'https://git.heroku.com/sheltered-savannah-34228.git/https://api.miro.com/v2/boards/o9J_lhnZ4CE%3D/widgets?limit=10&type=sticky_note',
  headers: {
    Accept: 'application/json',
    Authorization: 'Bearer d3FkU05pGwTDTGUEKLpHTjXX5ws',
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    'Access-Control-Allow-Credentials': 'true'
    }
};


setInterval(function(){ 
  console.log("asd")
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}, 3000);
}
console.log("board", board)
init();

