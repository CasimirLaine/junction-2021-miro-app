import { oldlace } from 'color-name'
import { findVariables, setVariables } from './items.js'
const { board } = window.miro
let varBeingEdited

const idPrefix = ""
const varPrefix = "var_"
const editPrefix = "edit_"
const valPrefix = "val_"

window.appendToTable = function appendToTable(variableName, variableValue) {
    console.log(variableName, variableValue)
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
    var editButton = '<button onclick="editVariable(' + id + ')" id="' + editId + '" style="float:right; display:inline;" class="editButton xbutton" onmouseover="toggleVisible(' + editId + ')">edit</button>'
    var element = document.getElementById("vtable-body")
    element.innerHTML += '<tr id=' + id + '>\
                            <td onmouseover="toggleVisible(\''+ editId + '\')" onmouseout="toggleInvisible(\'' + editId + '\')" scope="col">\
                                <div style="margin: 0;" id="'+ varId + '">' + variableName + "</div> " + '</td><td id="' + valId + '">' + variableValue + '\
                            </td>\
                            <td>' + editButton + '</td>\
                            <td scope="col">\
                                <button onclick="removeRow('+ id + ')" class="xbutton">✕</button>\
                            </td>\
                        </tr>';
}


window.showVariableForm = function showVariableForm() {
    document.getElementById("varinput").value = ""
    document.getElementById("valinput").value = ""
    var button = document.getElementById("b1");
    button.style.display = 'none'
    var element = document.getElementById("input-field");
    element.style.display = 'inline'
}

window.removeRow = function removeRow(id) {    
    if(typeof editId === 'string'){
        document.getElementById(id).remove();
    } else {
        document.getElementById(id.id).remove();
    }
}

window.toggleVisible = function toggleVisible(editId) {
    if(typeof editId === 'string'){
        let el = document.getElementById(editId);
        el.style.display = "inline"
    } else {
        let el = document.getElementById(editId.id);
        el.style.display = "inline"
    }
}

window.toggleInvisible = function toggleInvisible(editId) {
    if(typeof editId === 'string'){
        let el = document.getElementById(editId);
        el.style.display = "none"
    } else {
        let el = document.getElementById(editId.id);
        el.style.display = "none"
    }
}

window.createTable = async function createTable() {
    var variables = {}
    var variableTable = window.variables
    console.log(variableTable)
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
    window.variables = variables
    console.log("Table created with values: ")
    console.log(window.variables)
    for (var variableName in variables) {
        appendToTable(variableName, variables[variableName])
    }
}

window.editVariable = function editVariable(id) {
    toggleVisible("edit-field")
    toggleInvisible('input-field')
    toggleInvisible('b1')

    document.getElementById("varedit").value = id.id
    document.getElementById("varedit").disabled = "disabled"
    document.getElementById("valedit").value = window.variables[id.id]
}

window.saveEdit = function saveEdit() {
    let newVariable = document.getElementById("varedit")
    let newValue = document.getElementById("valedit")
    console.log(newValue, newVariable)
    console.log(newValue.value, newVariable.value)
    console.log(document.getElementById('val_' + newVariable))
    console.log('val_' +  newVariable.value)
    document.getElementById('val_' + newVariable.value).innerHTML = newValue.value
    var dictionary = window.variables
    dictionary[newVariable.value] = newValue.value
    window.variables = dictionary
    console.log(window.variables)
    setVariables(newVariable.value)
    toggleInvisible("edit-field")
    toggleVisible('b1')
}

window.saveVariable = async function saveVariable() {
    var key = document.getElementById("varinput").value
    var value = document.getElementById("valinput").value
    var dictionary = window.variables
    appendToTable(key,value)
    console.log(dictionary)
    dictionary[key] = value
    console.log(dictionary)
    window.variables = dictionary
    setVariables(key)
}
