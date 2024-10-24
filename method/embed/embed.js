const axios = require('axios');

async function sendEmbed(webhookUrl, title, description, color = 0x7289DA) {
    const embed = { title, description, color };
    const payload = { embeds: [embed] };

    await axios.post(webhookUrl, payload, {
        headers: { 'Content-Type': 'application/json' }
    });
}

module.exports = sendEmbed;
