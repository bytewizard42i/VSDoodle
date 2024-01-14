const vscode = require('vscode');

function activate(context) {
    let disposable = vscode.commands.registerCommand('vsdoodle.activate', function () {
        vscode.window.showInformationMessage('VSDoodle Activated!');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};
