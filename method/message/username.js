const axios = require('axios');

async function sendMessageWithUsername(webhookUrl, content, username) {
    const payload = { content, username };

    await axios.post(webhookUrl, payload, {
        headers: { 'Content-Type': 'application/json' }
    });
}

module.exports = sendMessageWithUsername;
