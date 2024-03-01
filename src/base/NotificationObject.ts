export default class NotificationObject {
  public icon? = "";
  public title? = "";
  public content? = "";
  public addTime? = false;
  public attachment? = "";
  public showPoweredBy? = false;

  public static toString(notification: NotificationObject) {
    return `{"icon":"${notification.icon}","title":"${notification.title}","content":"${notification.content}","addTime":${notification.addTime},"attachment":"${notification.attachment}","showPoweredBy":${notification.showPoweredBy}}`;
  }
}
