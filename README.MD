# Hey Hi

## Providers

| Provider      | Status | Variables                                        | Instructions                                                                                                                                                                                                       |
|---------------|--------|--------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Telegram      | ✓      | `bot_token`<br/>`chat_id`                        | [Creating](https://core.telegram.org/bots/features#botfather) bot and getting token.<br/>To get chat ID send message to your bot and make a request to [getUpdates](https://core.telegram.org/bots/api#getupdates) |
| Discord       | ✓      | `DISCORD_WEBHOOK_ID`<br/>`DISCORD_WEBHOOK_TOKEN` | [Create](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) webhook, copy the `webhook` url and you'll have this `https://discord.com/api/webhooks/[WEBHOOK_ID]/[WEBHOOK_TOKEN]`           |
| Pushbullet    | ✓      | `PUSHBULLET_ACCESS_TOKEN`                        | Go to your Pushbullet [Account](https://www.pushbullet.com/#settings/account) page, and click on "Create Access Token"                                                                                             |
| Slack         | ✓      | `SLACK_WEBHOOK_URL`                              | Create [app](https://api.slack.com/apps/new) then manager your app in [Slack API](https://api.slack.com/apps), navigate to "Incoming Webhooks" and copy your webhook URL.                                          |
| Google Chat   | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| Twillio SMS   | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| Twillio Voice | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| Plivo SMS     | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| Plivo Voice   | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| SMTP          | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| Teams         | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| SendInBlue    | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| SendGrid      | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| Webhook       | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| MySQL         | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| PostgreSQL    | ⌛️     |                                                  |                                                                                                                                                                                                                    |
| Appwrite DB   | ⌛️     |                                                  |                                                                                                                                                                                                                    |

## Cli

Example using Telegram

```shell
npx heyhi telegram "[BOT_TOKEN]||[CHAT_ID]" ⚡️ "New version" "New version on your function has been deployed"
```

## Adding provider steps

1. Create provider in the [`providers`](./src/providers) folder by copying an existing one.
2. Add the provider to the `iterator` in the [`HeyHi.ts`](./src/HeyHi.ts) file.
3. Add the provider to the `export` section in the [`index.ts`](./src/index.ts) file.