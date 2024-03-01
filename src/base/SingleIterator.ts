import BaseProvider from "./BaseProvider";
import DummyProvider from "./DummyProvider";

type Provider = typeof DummyProvider | typeof BaseProvider | any;
export default class SingleIterator {
  svgIcon: string;
  name: string;
  construct: Provider;

  constructor(svgIcon: string, name: string, construct: Provider) {
    this.construct = construct;
    this.svgIcon = svgIcon;
    this.name = name;
  }
}
