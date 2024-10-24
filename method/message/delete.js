const axios = require('axios');

async function deleteMessage(webhookUrl, messageId) {
    const deleteUrl = `${webhookUrl}/messages/${messageId}`;

    await axios.delete(deleteUrl, {
        headers: { 'Content-Type': 'application/json' }
    });
}

module.exports = deleteMessage;
