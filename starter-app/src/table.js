const promise = import('./items.js')
const { board } = window.miro
let id = 0
let data = {}
// dictionary contains saved variables
var dictionary = {}
let varBeingEdited

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


    let editButton = '<button onclick="editVariable('+id+')" id="' + editId+'" style="float:right; display:none;" class="editButton xbutton" onmouseover="toggleVisibility(' + editId + ', true)">edit</button>'
    var element = document.getElementById("vtable-body")
    element.innerHTML += '<tr id='+id+'>\
                            <td onmouseover="toggleVisible(\''+editId+'\')" onmouseout="toggleInvisible(\''+editId+'\')" scope="col">\
                                <div style="margin: 0;" id="'+varId+'">' + variable + "</div> " + editButton +'</td><td id="'+valId+'">' + value + '\
                            </td>\
                            <td scope="col">\
                                <button onclick="removeRow('+id+')" class="xbutton">✕</button>\
                            </td>\
                        </tr>';
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

window.toggleVisible = function toggleVisible(id){
    let el = document.getElementById(id);
    el.style.display = "inline"
}

window.toggleInvisible = function toggleInvisible(id){
    let el = document.getElementById(id);
    el.style.display = "none"
}

window.toggleVisibility = function toggleVisibility(id, bool) {
    let el = document.getElementById(id);
    console.log('toggle', el)
    if (bool) {
        el.style.display = "inline"
    }
    
    if (el.style.display === "none") {
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

window.editVariable = function editVariable(id) {
    toggleVisible("edit-field")
    toggleInvisible('input-field')
    let valId = "val"+id
    let varId = "var"+id

    varBeingEdited = [valId, varId]
    console.log('varbeingedited', varBeingEdited)
    // let variable = document.getElementById(valId)
    // let value = document.getElementById(varId)
    // console.log(value, variable)
    // console.log(value.innerHTML, variable.innerHTML)


}

window.saveEdit = function saveEdit() {
    let valId = varBeingEdited[0]
    let varId = varBeingEdited[1]

    let variable = document.getElementById(varId)
    let value = document.getElementById(valId)

    let newVariable = document.getElementById("varedit")
    let newValue = document.getElementById("valedit")
    console.log(newValue, newVariable)

    console.log(newValue.value, newVariable.value)

    variable.innerHTML = newVariable.value
    value.innerHTML = newValue.value

    toggleInvisible("edit-field")
    toggleVisible('b1')

}


window.saveVariable = function saveVariable() {
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
