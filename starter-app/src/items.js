const { board } = window.miro;
const variableSign = "$"
const regexPattern = "[" + variableSign + "]{1}[a-zA-Z0-9äöüÄÖÜ]+";

const itemTypes = {
    card: {
        textFields: [
            'title', 'description'
        ]
    },
    image: {
        textFields: [
            'title', 'url'
        ]
    },
    shape: {
        textFields: [
            'content'
        ]
    },
    sticky_note: {
        textFields: [
            'content'
        ]
    },
    text: {
        textFields: [
            'content'
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
    var widgetVariables = {};
    for (var itemType in itemTypes) {
        let boardItems = await board.get({
            type: [itemType]
        });
        for (var boardItem of boardItems) {
            const foundVariables = findVariablesInObject(boardItem, itemTypes[itemType]);
            if (foundVariables?.length) {
                widgetVariables[boardItem.id] = foundVariables;
            }
        }
    }
    return widgetVariables;
}

function widgetsWithVariable(variableName, widgetVariables) {
    var widgetIds = new Array();
    for (var widgetId in widgetVariables) {
        var variableList = widgetVariables[widgetId]
        if (variableList.includes(variableName)) {
            widgetIds.push(widgetId);
        }
    }
    return widgetIds;
}

function updateWidget(widget, variable, value) {
    var itemType = itemTypes[widget.type];
    for (var textField of itemType.textFields) {
        widget[textField] = widget[textField].replace(variableSign + variable, value)
    }
    widget.sync()
}

async function setVariables() {
    var widgetVariables = await findVariables();
    var variables = board.getAppData('variables');
    for (var key in variables) {
        var widgetIds = widgetsWithVariable(key, widgetVariables);
        for (var widgetId of widgetIds) {
            var value = variables[key];
            try {
                var widget = await board.getById(widgetId);
                updateWidget(widget, variable, value);
            } catch (error) {
                console.log(error);
            }
        }
    }

}

export { findVariables, setVariables };
