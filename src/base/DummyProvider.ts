import BaseProvider from "../base/BaseProvider";
import NotificationObject from "../base/NotificationObject";

export default class DummyProvider extends BaseProvider {
  static svgIcon: string = "";

  // @ts-ignore
  constructor(a: any = "", b: any = "", c: any = "", d: any = "", e: any = "") {
    super();
  }

  async push(notification: NotificationObject): Promise<boolean> {
    console.log(`Dummy pushed ${notification.title}`);

    return true;
  }
}
