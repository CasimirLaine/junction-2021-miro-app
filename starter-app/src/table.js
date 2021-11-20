const promise = import('./items.js')
const { board } = window.miro
let id = 0
let data = {}
let variableNames

function printFunction() {
    console.log("Print statement!");
}

function appendToTable() {
    id += 1
    var button = document.getElementById("b1");
    button.style.display = 'inline'
    var element = document.getElementById("input-field");
    element.style.display = 'none'

    var variable = document.getElementById("varinput").value
    var value = document.getElementById("valinput").value
    document.getElementById("varinput").value = ""
    document.getElementById("valinput").value = ""

    var element = document.getElementById("vtable-body")
    element.innerHTML += '<tr id=' + id + '><td>' + variable + '</td><td>' + value + '</td><td scope="col"><button onclick="removeRow(' + id + ')" class="xbutton">✕</button></td></tr>';
    data[variable] = value
    saveVariables()
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

function saveVariables() {
    console.log(data)
    console.log('board', board)
    board.setAppData("variables", data).then(d => {
        var variableTable = board.getAppData("variables").then(
            d => {
                console.log('appdata set', d)
                promise.then(
                    data => {
                        data.setVariables();
                    }
                )
            }
        )
    })
}