let id = 0
function printFunction() {
    console.log("Print statement!");
}

function appendToTable(){
    id += 1
    var button = document.getElementById("b1");
    button.style.display = 'inline'
    var element = document.getElementById("input-field");
    element.style.display = 'None'

    var variable = document.getElementById("varinput").value
    var value = document.getElementById("valinput").value
    document.getElementById("varinput").value = ""
    document.getElementById("valinput").value = ""

    var element = document.getElementById("vtable-body")
    element.innerHTML += '<tr id='+id+'><td>' + variable + '</td><td>' + value + '</td><td scope="col"><button onclick="removeRow('+id+')" class="xbutton">✕</button></td></tr>';
}

function showVariableForm(){
    var button = document.getElementById("b1");
    button.style.display = 'None'
    var element = document.getElementById("input-field");
    element.style.display = 'inline-block'
}

function removeRow(id) {
    document.getElementById(id).remove();
}