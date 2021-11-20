const promise = import('./items.js')
const { board } = window.miro
let id = 0
let data = {}
let variableNames

<<<<<<< HEAD
window.printFunction =  function printFunction() {
=======
function printFunction() {
>>>>>>> main
    console.log("Print statement!");
}

window.appendToTable = function appendToTable(){
    id += 1
    let editId = "edit" + id
    var button = document.getElementById("b1");
    button.style.display = 'inline'
    var element = document.getElementById("input-field");
    element.style.display = 'none'

    var variable = document.getElementById("varinput").value
    var value = document.getElementById("valinput").value
    document.getElementById("varinput").value = ""
    document.getElementById("valinput").value = ""


    editButton = '<button id="' + editId+'" style="float:right; display:inline;" class="editButton xbutton" onmouseover="toggleVisibility(' + editId + ', true)">edit</button>'
    var element = document.getElementById("vtable-body")
<<<<<<< HEAD
    element.innerHTML += '<tr id='+id+'><td>' + variable + '</td><td>' + value + '</td><td scope="col"><button onclick="removeRow('+id+')" class="xbutton">✕</button></td></tr>';
=======
    element.innerHTML += '<tr id='+id+'><td onmouseover="toggleVisibility('+editId+')" onmouseout="toggleVisibility('+editId+')" scope="col">' + variable + " " + editButton +'</td><td>' + value + '</td><td scope="col"><button onclick="removeRow('+id+')" class="xbutton">✕</button></td></tr>';
>>>>>>> main
    data[variable] = value
    saveVariables()
}

window.showVariableForm = function showVariableForm(){
    var button = document.getElementById("b1");
    button.style.display = 'none'
    var element = document.getElementById("input-field");
    element.style.display = 'inline'
}

window.removeRow = function removeRow(id) {
    document.getElementById(id).remove();
}

window.toggleVisibility = function toggleVisibility(id, bool) {
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
window.test = function test(){
    promise.then(
        data => {
            data.findVariables().then(d => {
            console.log('Print', d)
            return d})
            .then(d =>{
                for (var key in d) {
                    if (d.hasOwnProperty(key)) {
                        var arr = d[key]
                        for (var i = 0; i < arr.length; i++) {
                            document.getElementById("varinput").value = arr[i]
                            appendToTable()
                        }
                    }
                }
            })
        }
    )
}

<<<<<<< HEAD
window.saveVariables = function saveVariables() {
=======
function saveVariables() {
>>>>>>> main
    console.log(data)
    console.log('board', board)
    board.setAppData("variables", data).then(d=>{
        var appdata = board.getAppData("variables").then(
<<<<<<< HEAD
            d => {
=======
            d=> {
>>>>>>> main
                console.log('appdata set', d)
            }
        )
    })
}