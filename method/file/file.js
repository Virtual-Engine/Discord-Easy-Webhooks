const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function sendFile(webhookUrl, filePath, message) {
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));
    if (message) {
        form.append('content', message);
    }

    await axios.post(webhookUrl, form, {
        headers: {
            ...form.getHeaders()
        }
    });
}

module.exports = sendFile;