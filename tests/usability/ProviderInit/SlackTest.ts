import HeyHi from "../../../src/HeyHi";
import Slack from "../../../src/providers/Slack";

export default function SlackTest(): void {
  HeyHi.addProvider(new Slack(process.env.SLACK_WEBHOOK_URL ?? ""));
}
