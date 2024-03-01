import HeyHi, { Discord } from "../../../src/index";

export default function DiscordTest(): void {
  HeyHi.addProvider(new Discord(process.env.DISCORD_WEBHOOK_ID ?? "", process.env.DISCORD_WEBHOOK_TOKEN ?? ""));
}
