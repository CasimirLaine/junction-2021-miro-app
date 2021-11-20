const promise = import('./items.js')
const { board } = window.miro
let id = 0
let data = {}
// dictionary contains saved variables
var dictionary = {}
let varBeingEdited

function printFunction() {
    console.log("Print statement!");
}

function appendToTable() {
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


    editButton = '<button onclick="editVariable('+id+')" id="' + editId+'" style="float:right; display:none;" class="editButton xbutton" onmouseover="toggleVisibility(' + editId + ', true)">edit</button>'
    var element = document.getElementById("vtable-body")
    element.innerHTML += '<tr id='+id+'>\
                            <td onmouseover="toggleVisibility(\''+editId+'\')" onmouseout="toggleVisibility(\''+editId+'\')" scope="col">\
                                <div style="margin: 0;" id="'+varId+'">' + variable + "</div> " + editButton +'</td><td id="'+valId+'">' + value + '\
                            </td>\
                            <td scope="col">\
                                <button onclick="removeRow('+id+')" class="xbutton">✕</button>\
                            </td>\
                        </tr>';
    data[variable] = value
}


function showVariableForm() {
    var button = document.getElementById("b1");
    button.style.display = 'none'
    var element = document.getElementById("input-field");
    element.style.display = 'inline'
}

function removeRow(id) {
    document.getElementById(id).remove();
}

function toggleVisibility(id, bool) {
    let el = document.getElementById(id);
    if (bool) {
        el.style.display = "inline"
    }
    
    if (el.style.display === "none") {
        el.style.display = "inline"
    } else {
        el.style.display = "none"
    }
}

function test() {
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

function editVariable(id) {
    toggleVisibility("edit-field")
    let valId = "val"+id
    let varId = "var"+id

    varBeingEdited = [valId, varId]

    // let variable = document.getElementById(valId)
    // let value = document.getElementById(varId)
    // console.log(value, variable)
    // console.log(value.innerHTML, variable.innerHTML)


}

function saveEdit() {
    let valId = varBeingEdited[0]
    let varId = varBeingEdited[1]

    let variable = document.getElementById(valId)
    let value = document.getElementById(varId)

    let newVariable = document.getElementById("varedit")
    let newValue = document.getElementById("valedit")
    console.log(newValue, newVariable)

    console.log(newValue.innerHTML, newVariable.innerHTML)

    variable.innerHTML = newVariable.value
    value.innerHTML = newValue.value

    toggleVisibility("edit-field")

}


function saveVariable() {
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
