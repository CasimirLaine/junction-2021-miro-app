import { findVariables, setVariables } from './items.js'
const { board } = window.miro

const idPrefix = "id_"
const varPrefix = "var_"
const editPrefix = "edit_"
const valPrefix = "val_"

window.appendToTable = function appendToTable(variableName, variableValue) {
    let id = idPrefix + variableName
    //editId is for edit button
    let editId = editPrefix + variableName
    //varId is for the <td> that contains variable name
    let varId = varPrefix + variableName
    // valId is for the <td> that ocntains value
    let valId = valPrefix + variableName
    var button = document.getElementById("b1");
    button.style.display = 'inline'
    var element = document.getElementById("input-field");
    element.style.display = 'none'

    document.getElementById("varinput").value = variableName
    document.getElementById("valinput").value = variableValue


    let editButton = '<button id="' + editId + '" style="float:right; display:none;" class="editButton xbutton" onmouseover="toggleVisibility(' + editId + ', true)">edit</button>'
    var element = document.getElementById("vtable-body")
    element.innerHTML += '<tr id=' + id + '><td onmouseover="toggleVisibility(\'' + editId + '\')" onmouseout="toggleVisibility(\'' + editId + '\')" scope="col">' + variableName + " " + editButton + '</td><td>' + variableValue + '</td><td scope="col"><button onclick="removeRow(' + id + ')" class="xbutton">✕</button></td></tr>';
}


window.showVariableForm = function showVariableForm() {
    var button = document.getElementById("b1");
    button.style.display = 'none'
    var element = document.getElementById("input-field");
    element.style.display = 'inline'
}

window.removeRow = function removeRow(id) {
    document.getElementById(id).remove();
}

window.toggleVisibility = function toggleVisibility(editId, bool) {
    let el = document.getElementById(editId);
    if (bool) {
        el.style.display = "inline"
    }
    if (el.style.display === "none") {
        el.style.display = "inline"
    } else {
        el.style.display = "none"
    }
}
window.createTable = async function createTable() {
    var variables = {}
    var variableTable = await board.getAppData("variables")
    for (variableName in variableTable) {
        variables[variableName] = variableTable[variableName]
    }
    var widgetVariables = await findVariables()
    for (var key in widgetVariables) {
        var variableNames = widgetVariables[key]
        for (variableName of variableNames) {
            if (!(variableName in variables)) {
                variables[variableName] = ""
            }
        }
    }
    for (var variableName in variables) {
        appendToTable(variableName, variables[variableName])
    }
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

window.saveEdit = function saveEdit(id) {
    //input fields
    let valedit = document.getElementById("valedit")
    let varedit = document.getElementById("varedit")
    //variable table fields
    let varElement = document.getElementById("var" + id)
    let valElement = document.getElementById("var" + id)

    varElement.innerHTML = varedit.innerHTML
    valElement.innerHTML = valedit.innerHTML
}

window.saveVariable = async function saveVariable() {
    var key = document.getElementById("varinput").value
    var value = document.getElementById("valinput").value
    var dictionary = await board.getAppData("variables")
    dictionary[key] = value
    await board.setAppData("variables", dictionary)
    setVariables(key)
}
