const axios = require('axios');

async function sendMessage(webhookUrl, content) {
    const payload = { content };

    await axios.post(webhookUrl, payload, {
        headers: { 'Content-Type': 'application/json' }
    });
}

module.exports = sendMessage;
