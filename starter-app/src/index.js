import axios from 'axios'
import { mistyrose } from 'color-name';
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

const promise = import('./items.js')
let id = 0
export function printFunction() {
    console.log("Print statement!");
}

export function appendToTable(){
    id += 1
    var button = document.getElementById("b1");
    button.style.display = 'inline'
    var element = document.getElementById("input-field");
    element.style.display = 'hidden'

    
    var variable = document.getElementById("varinput").value
    var value = document.getElementById("valinput").value
    document.getElementById("varinput").value = ""
    document.getElementById("valinput").value = ""

    var element = document.getElementById("vtable-body")
    element.innerHTML += '<tr id='+id+'><td>' + variable + '</td><td>' + value + '</td><td scope="col"><button onclick="removeRow('+id+')" class="xbutton">✕</button></td></tr>';
}

export function showVariableForm(){
    var button = document.getElementById("b1");
    button.style.display = 'None'
    var element = document.getElementById("input-field");
    element.style.display = 'inline-block'
}

export function removeRow(id) {
    document.getElementById(id).remove();
}

export function toggleVisibility(id, bool) {
    let el = document.getElementById(id);
    if(bool) {
        el.style.display = "inline"
    }
    if(el.style.display === "none") {
        el.style.display = "inline"
    } else {
        el.style.display = "none"
    }
}
export function test(){
    promise.then(
        data => {
        console.log('Print')
        console.log(data.findVariables())
        }
    )
}