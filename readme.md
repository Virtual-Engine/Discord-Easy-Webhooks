# Webhook Manager

- Webhook Manager is a Node.js module designed to manage and interact with webhooks. It provides convenient methods to send messages, embeds, files, and other types of interactions through webhooks.

# Features
- ***Send a message***: Send a simple text message to a webhook.
- ***Send an embed:*** Send a customized embed with a title, description, and color.
- ***Send a message with a custom username:*** Send a message with a custom username.
- ***Send an embed with fields:*** Send an embed with additional fields.
- ***Send a file:*** Send a file attached to a message.
- ***Send a TTS message:*** Send a text-to-speech (TTS) message.
- ***Delete a message:*** Delete a message sent via the webhook.
- ***Initialize the webhook:*** Set the webhook URL and check for updates.

# Installation

- Clone this repository to your machine or install it via npm if you publish it later.
- Install the required dependencies.

```js
npm install
```

# Usage

- Import the module

```js
const WebhookManager = require('./webhookManager');
const manager = new WebhookManager();
```

# Initialization
- Before sending any messages, you need to initialize the webhook with its URL.

```js
manager.init('https://your-webhook-url.com');
```

# Sending a message

```js
manager.sendMessage('Hello, world!')
  .then(response => {
    console.log('Message sent successfully!');
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
```
# Sending an embed

```js
manager.sendEmbed('Embed Title', 'Embed Description', 0xFF5733)
  .then(response => {
    console.log('Embed sent successfully!');
  })
  .catch(error => {
    console.error('Error sending embed:', error);
  });
```

# Sending a message with a custom username

```js
manager.sendMessageWithUsername('Hello, world!', 'Custom Username')
  .then(response => {
    console.log('Message sent with custom username!');
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
```

# Sending an embed with fields

```js
const fields = [
  { name: 'Field 1', value: 'Value 1' },
  { name: 'Field 2', value: 'Value 2' },
];

manager.sendEmbedWithFields('Embed Title', 'Embed Description', fields, 0x7289DA)
  .then(response => {
    console.log('Embed with fields sent successfully!');
  })
  .catch(error => {
    console.error('Error sending embed:', error);
  });
```

# Sending a file

```js
manager.sendFile('./path/to/your/file.txt', 'Here is a file attachment')
  .then(response => {
    console.log('File sent successfully!');
  })
  .catch(error => {
    console.error('Error sending file:', error);
  });
```

# Sending a TTS message

```js
manager.sendTTSMessage('This is a TTS message')
  .then(response => {
    console.log('TTS message sent successfully!');
  })
  .catch(error => {
    console.error('Error sending TTS message:', error);
  });
```

# Deleting a message

```js
manager.deleteMessage('message-id')
  .then(response => {
    console.log('Message deleted successfully!');
  })
  .catch(error => {
    console.error('Error deleting message:', error);
  });
```

# API

`init(url_webhook)`
Initializes the webhook URL.

- `url_webhook` : The webhook URL to be used.

`sendMessage(content)`
Sends a text message.

- `content` : The content of the message to be sent.

- `sendEmbed(title, description, color)`
Sends a custom embed.

- `title` : The title of the embed.
- `description` : The description of the embed.
- `color` : The color of the embed (default is 0x7289DA).

`sendMessageWithUsername(content, username)`
Sends a message with a custom username.

- `content` : The content of the message.
- `username` : The custom username to display.

- `sendEmbedWithFields(title, description, fields, color)`
Sends an embed with additional fields.

- `title` : The title of the embed.
- `description` : The description of the embed.
- `fields` : An array of fields with name and value pairs.
- `color` : The color of the embed.

`sendFile(filePath, message)`
Sends a file with a message.

- `filePath` : The path to the file to send.
- `message` : The message to accompany the file.

`sendTTSMessage(content)`
Sends a text-to-speech (TTS) message.

- `content` : The content of the message to be sent.

- `deleteMessage(messageId)`
Deletes a message sent via the webhook.

- `messageId`: The ID of the message to delete.

# Contributions

- Contributions are welcome! Please submit a pull request or create an issue for suggestions or fixes.