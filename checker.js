const axios = require('axios');
const { version: currentVersion } = require('./package.json');


async function checkForUpdates() {
    const response = await axios.get(`https://registry.npmjs.org/discord-easy-webhook`);
    const latestVersion = response.data['dist-tags'].latest;

    if (latestVersion !== currentVersion) {
        console.log(`[discord-easy-webhook] Update available ${currentVersion} → ${latestVersion} : npm i discord-easy-webhook@latest`);
    }
}

module.exports = checkForUpdates;