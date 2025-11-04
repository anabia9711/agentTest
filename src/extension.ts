import * as vscode from 'vscode';
import { applyGreenITRules } from './utils/greenRules';

export function activate(context: vscode.ExtensionContext) {
  const handler: vscode.ChatRequestHandler = async (request, chatContext, stream, token) => {
    const fileType = getFileType();
    const greenPrompt = applyGreenITRules(request.prompt, fileType);

    stream.markdown(`✅ GreenAgent applied Green IT rules for **${fileType}** file.

**Modified Prompt:**
${greenPrompt}`);

    // Optional: Open Copilot Chat with modified prompt
    await vscode.commands.executeCommand('workbench.action.chat.open', greenPrompt);

    return; // ChatRequestHandler expects void or ChatResult
  };

  context.subscriptions.push(
    vscode.chat.createChatParticipant('greenagent-copilot-helper', handler)
  );
}

function getFileType(): string {
  const editor = vscode.window.activeTextEditor;
  return editor?.document.languageId || 'plaintext';
}
