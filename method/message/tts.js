const axios = require('axios');

async function sendTTSMessage(webhookUrl, content) {
    const payload = {
        content: content,
        tts: true
    };

    await axios.post(webhookUrl, payload, {
        headers: { 'Content-Type': 'application/json' }
    });
}

module.exports = sendTTSMessage;
