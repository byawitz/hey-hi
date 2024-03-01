export default class NHelper {
  public static isEmpty(value: any): boolean {
    return value === undefined || value === "" || value === null || (Array.isArray(value) && value.length === 0);
  }

  public static isNotEmpty(value: any): boolean {
    return !this.isEmpty(value);
  }
}
