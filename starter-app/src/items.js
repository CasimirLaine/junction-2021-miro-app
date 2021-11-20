const { board } = window.miro;
const variableSign = "$"
const regexPattern = "[" + variableSign + "]{1}[a-zA-Z0-9äöüÄÖÜ]+";

async function findVariables() {
    var variables = new Array();
    let boardItems = await board.get({
        type: ['card']
    });
    for (var boardItem of boardItems) {
        let title = boardItem.title;
        const foundVariables = [...title.matchAll(regexPattern)];
        for (var variable of foundVariables) {
            variables.push(variable[0].substring(1));
        }
    }
    return variables;
}
export { findVariables };
