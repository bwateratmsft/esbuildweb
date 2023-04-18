// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { crypto } from '@utils/crypto';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "esbuildwebextensiontest" is now active in the web extension host!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('esbuildwebextensiontest.helloWorld', async () => {
		// The code you place here will be executed every time your command is executed

		const subtleCrypto = crypto.subtle;
		const hash = await subtleCrypto.digest('SHA-256', new TextEncoder().encode('Hello, world!'));
		const decodedHash = new TextDecoder().decode(hash);

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from EsbuildWebExtensionTest in a web extension host! The hash is: ' + decodedHash);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
