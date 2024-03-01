import HeyHi from "../../../src/HeyHi";
import PushBullet from "../../../src/providers/PushBullet";

export default function PushBulletTest(): void {
  HeyHi.addProvider(new PushBullet(process.env.PUSHBULLET_ACCESS_TOKEN ?? ""));
}
