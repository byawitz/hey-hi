import NotificationObject from "./NotificationObject";
import SingleIterator from "./SingleIterator";

export default abstract class BaseProvider {
  static svgIcon: string;

  public abstract push(notification: NotificationObject): Promise<boolean>;

  public static getIteratorInfo(): SingleIterator {
    return new SingleIterator(this.svgIcon, this.name, this);
  }
}
