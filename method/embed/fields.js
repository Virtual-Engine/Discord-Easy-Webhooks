const axios = require('axios');

async function sendEmbedWithFields(webhookUrl, title, description, fields, color = 0x7289DA) {
    const embed = { title, description, color, fields };
    const payload = { embeds: [embed] };

    await axios.post(webhookUrl, payload, {
        headers: { 'Content-Type': 'application/json' }
    });
}

module.exports = sendEmbedWithFields;