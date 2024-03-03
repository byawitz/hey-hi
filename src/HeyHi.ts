import NotificationObject from "./base/NotificationObject";
import Telegram from "./providers/Telegram";
import BaseProvider from "./base/BaseProvider";
import Discord from "./providers/Discord";
import PushBullet from "./providers/PushBullet";
import Webhook from "./providers/Webhook";
import SingleIterator from "./base/SingleIterator";
import NHelper from "./utils/NHelper";
import Slack from "./providers/Slack";

export default class HeyHi {
  private static providers: BaseProvider[] = [];

  public static addProvider(provider: BaseProvider): void {
    this.providers.push(provider);
  }

  public static async sendNotification(notification: NotificationObject) {
    for (const provider of this.providers) {
      await provider.push(notification);
    }
  }

  public static iterator(): SingleIterator[] {
    // prettier-ignore
    return [
      Discord.getIteratorInfo(),
      PushBullet.getIteratorInfo(),
      Telegram.getIteratorInfo(),
      Slack.getIteratorInfo(),
      Webhook.getIteratorInfo()
    ];
  }

  static buildMarkdownMessage(notification: NotificationObject) {
    return `${notification.icon ? notification.icon + "\n\n" : ""}*${notification.title}*\n${notification.content}`;
  }

  static buildIconPlusTitle(notification: NotificationObject, stars = "*") {
    return `${NHelper.isNotEmpty(notification.icon) ? notification.icon + " " : ""}${stars}${notification.title}${stars}`;
  }

  static timestamp(notification: NotificationObject, addedString = ""): string {
    if (notification.addTime) {
      return `${addedString}${new Date().toLocaleString()}`;
    }

    return "";
  }
}
