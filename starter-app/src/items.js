const { board } = window.miro;
const variableSign = "$"
const regexPattern = "[" + variableSign + "]{1}[a-zA-Z0-9äöüÄÖÜ]+";

const itemTypes = {
    card: {
        textFields: [
            'title', 'description'
        ]
    }
}

function findVariablesInText(text) {
    var variables = new Array();
    const foundVariables = [...text.matchAll(regexPattern)];
    for (var variable of foundVariables) {
        variables.push(variable[0].substring(1));
    }
    return variables;
}

function findVariablesInObject(item, itemType) {
    var variables = new Array();
    for (var textField of itemType.textFields) {
        const stringValue = item[textField]
        const foundVariables = findVariablesInText(stringValue)
        variables.push(...foundVariables)
    }
    return variables;
}

async function findVariables() {
    var variables = new Array();
    for (var itemType in itemTypes) {
        let boardItems = await board.get({
            type: [itemType]
        });
        for (var boardItem of boardItems) {
            variables.push(...findVariablesInObject(boardItem, itemTypes[itemType]))
        }
    }
    return variables;
}
export { findVariables };