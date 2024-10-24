const sendMessage = require('./method/message/message');
const sendEmbed = require('./method/embed/embed');
const sendMessageWithUsername = require('./method/message/username');
const sendEmbedWithFields = require('./method/embed/fields');
const checkForUpdates = require('./checker');

let webhookUrl = "";

class webhookManager {
    sendMessage(content) {
        return sendMessage(webhookUrl, content);
    }

    sendEmbed(title, description, color = 0x7289DA) {
        return sendEmbed(webhookUrl, title, description, color);
    }

    sendMessageWithUsername(content, username) {
        return sendMessageWithUsername(webhookUrl, content, username);
    }

    sendEmbedWithFields(title, description, fields, color) {
        return sendEmbedWithFields(webhookUrl, title, description, fields, color);
    }

    sendFile(filePath, message) {
        return sendFile(webhookUrl, filePath, message);
    }

    sendTTSMessage(content) {
        return sendTTSMessage(webhookUrl, content);
    }

    deleteMessage(messageId) {
        return deleteMessage(webhookUrl, messageId);
    }

    init(url_webhook) {
        webhookUrl = url_webhook;
        return checkForUpdates();
    }
}

module.exports = webhookManager;