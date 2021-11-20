const promise = import('./items.js')
const { board } = window.miro
let id = 0
let data = {}
// dictionary contains saved variables
var dictionary = {}
let variableNames

window.printFunction =  function printFunction() {
    console.log("Print statement!");
}

window.appendToTable = function appendToTable(){
    id += 1
    //editId is for edit button
    let editId = "edit" + id
    //varId is for the <td> that contains variable name
    let varId = "var" + id
    // valId is for the <td> that ocntains value
    let valId = "val" + id
    var button = document.getElementById("b1");
    button.style.display = 'inline'
    var element = document.getElementById("input-field");
    element.style.display = 'none'
    
    var variable = document.getElementById("varinput").value
    var value = document.getElementById("valinput").value
    document.getElementById("varinput").value = ""
    document.getElementById("valinput").value = ""


    let editButton = '<button id="' + editId+'" style="float:right; display:none;" class="editButton xbutton" onmouseover="toggleVisibility(' + editId + ', true)">edit</button>'
    var element = document.getElementById("vtable-body")
    element.innerHTML += '<tr id='+id+'><td onmouseover="toggleVisibility(\''+editId+'\')" onmouseout="toggleVisibility(\''+editId+'\')" scope="col">' + variable + " " + editButton +'</td><td>' + value + '</td><td scope="col"><button onclick="removeRow('+id+')" class="xbutton">✕</button></td></tr>';
    data[variable] = value
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
    if (bool && el.style) {
        el.style.display = "inline"
    }

    if (el.style && el.style.display === "none") {
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
                return d
            })
                .then(d => {
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

window.editVariable = function editVariable(id, name, value) {
    let table = document.getElementById('editVariableForm')
    table.style.display = 'inline'
    let valedit = document.getElementById("valedit")
    let varedit = document.getElementById("varedit")
    varedit.value = name
    valedit.value = value
}

window.closeEditVariable = function closeEditVariable() {
    let table = document.getElementById('editVariableForm')
    table.style.display = 'none'
    let valedit = document.getElementById("valedit")
    let varedit = document.getElementById("varedit")
    varedit.value = ''
    valedit.value = ''
}

window.closeEditVariable = function saveEdit(id) {
    //input fields
    let valedit = document.getElementById("valedit")
    let varedit = document.getElementById("varedit")
    //variable table fields
    let varElement = document.getElementById("var"+id)
    let valElement = document.getElementById("var"+id)

    varElement.innerHTML = varedit.innerHTML
    valElement.innerHTML = valedit.innerHTML
}


window.saveVariables = function saveVariables(variable) {
            var key = document.getElementById("varinput").value
    var value = document.getElementById("valinput").value
    dictionary[key] = value

    board.setAppData("variables", dictionary)
    .then(d =>{
        console.log('appdata set')
        board.getAppData("variables")
        .then(d => {
            console.log('appdata set', d)
            return 
        })
    })
}
