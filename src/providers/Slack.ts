import BaseProvider from "../base/BaseProvider";
import NotificationObject from "../base/NotificationObject";
import Webhook from "./Webhook";
import HeyHi from "../HeyHi";

export default class Slack extends BaseProvider {
  static svgIcon: string = "";

  private readonly webhookURL: string;

  constructor(webhookURL: string) {
    super();
    this.webhookURL = webhookURL;
  }

  async push(notification: NotificationObject): Promise<boolean> {
    const wh = new Webhook(
      this.webhookURL,
      {
        text: HeyHi.buildMarkdownMessage(notification),
      },
      {
        "content-type": "application/json",
      }
    );

    return await wh.push(notification);
  }
}
