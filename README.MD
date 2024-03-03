# Hey Hi

## Providers

| Provider      | Status | Variables                                    | Instructions                                                                                                                                                                                                       |
|---------------|--------|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Telegram      | ✓      | `bot_token` `chat_id`                        | [Creating](https://core.telegram.org/bots/features#botfather) bot and getting token.<br/>To get chat ID send message to your bot and make a request to [getUpdates](https://core.telegram.org/bots/api#getupdates) |
| Discord       | ✓      | `DISCORD_WEBHOOK_ID` `DISCORD_WEBHOOK_TOKEN` | [Create](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) webhook, copy the `webhook` url and you'll have this `https://discord.com/api/webhooks/[WEBHOOK_ID]/[WEBHOOK_TOKEN]`           |
| Pushbullet    | ✓      | `PUSHBULLET_ACCESS_TOKEN`                    | Go to your Pushbullet [Account](https://www.pushbullet.com/#settings/account) page, and click on "Create Access Token"                                                                                             |
| Slack         | ⌛️     |                                              |                                                                                                                                                                                                                    |
| Google Chat   | ⌛️     |                                              |                                                                                                                                                                                                                    |
| Twillio SMS   | ⌛️     |                                              |                                                                                                                                                                                                                    |
| Twillio Voice | ⌛️     |                                              |                                                                                                                                                                                                                    |
| Plivo SMS     | ⌛️     |                                              |                                                                                                                                                                                                                    |
| Plivo Voice   | ⌛️     |                                              |                                                                                                                                                                                                                    |
| SMTP          | ⌛️     |                                              |                                                                                                                                                                                                                    |
| Teams         | ⌛️     |                                              |                                                                                                                                                                                                                    |
| SendInBlue    | ⌛️     |                                              |                                                                                                                                                                                                                    |
| SendGrid      | ⌛️     |                                              |                                                                                                                                                                                                                    |
| Webhook       | ⌛️     |                                              |                                                                                                                                                                                                                    |
| MySQL         | ⌛️     |                                              |                                                                                                                                                                                                                    |
| PostgreSQL    | ⌛️     |                                              |                                                                                                                                                                                                                    |
| Appwrite DB   | ⌛️     |                                              |                                                                                                                                                                                                                    |

## Cli

Example using Telegram

```shell
npx heyhi telegram "[BOT_TOKEN]||[CHAT_ID]" ⚡️ "New version" "New version on your function has been deployed"

```
