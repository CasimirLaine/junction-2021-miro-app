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