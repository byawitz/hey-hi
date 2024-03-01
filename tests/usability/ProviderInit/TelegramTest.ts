import Telegram from "../../../src/providers/Telegram";
import HeyHi from "../../../src/HeyHi";

export default function TelegramTest(): void {
  HeyHi.addProvider(new Telegram(process.env.TELEGRAM_BOT_TOKEN ?? "", process.env.TELEGRAM_CHAT_ID ?? "", true));
}
