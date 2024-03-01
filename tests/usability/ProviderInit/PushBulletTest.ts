import HeyHi, { PushBullet } from "../../../src/index";

export default function PushBulletTest(): void {
  HeyHi.addProvider(new PushBullet(process.env.PUSHBULLET_ACCESS_TOKEN ?? ""));
}
