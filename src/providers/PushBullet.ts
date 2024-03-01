import BaseProvider from "../base/BaseProvider";
import NotificationObject from "../base/NotificationObject";
import Webhook from "./Webhook";
import HeyHi from "../HeyHi";

export default class PushBullet extends BaseProvider {
  static svgIcon: string = "";

  private readonly accessToken: string;

  constructor(accessToken: string) {
    super();
    this.accessToken = accessToken;
  }

  async push(notification: NotificationObject): Promise<boolean> {
    const wh = new Webhook(
      "https://api.pushbullet.com/v2/pushes",
      { type: "note", title: HeyHi.buildIconPlusTitle(notification, ""), body: notification.content },
      {
        "Access-Token": this.accessToken,
        "Content-Type": "application/json",
      }
    );

    return await wh.push(notification);
  }
}
