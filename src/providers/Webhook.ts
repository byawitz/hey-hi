import BaseProvider from "../base/BaseProvider";
import NotificationObject from "../base/NotificationObject";
import fetch from "cross-fetch";

declare type MethodType = "POST" | "GET" | "PATCH" | "PUT" | "DELETE";

export default class Webhook extends BaseProvider {
  static svgIcon: string = "";

  private url: string;
  private method: MethodType;
  private headers: Record<string, string>;
  private body: Record<string, string>;

  constructor(url: string, body: Record<string, any> = {}, headers: Record<string, string> = {}, method: MethodType = "POST") {
    super();
    this.url = url;
    this.method = method;
    this.headers = headers;
    this.body = body;
  }

  async push(notification: NotificationObject): Promise<boolean> {
    const body = Object.keys(this.body).length === 0 ? notification : this.body;

    try {
      const res = await fetch(this.url, {
        body: JSON.stringify(body),
        method: this.method,
        headers: this.headers,
      });

      if (res.status === 200) {
        return true;
      }

      console.log(await res.json());
    } catch (e) {
      console.log(e);
    }

    return false;
  }
}
