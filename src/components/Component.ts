import { Event } from "../Event";

export type Record<K extends string | number | symbol, V> = {
  [P in K]: V;
};

export type CommonProps = {};
export type CommonEvents = {
  created: void;
};

export class Common<
  P extends CommonProps = CommonProps,
  E extends CommonEvents = CommonEvents
> extends Event<E> {
  constructor(props: P) {
    super();
    this.init();
    this.setProps(props);
    this.emit("created", void 0);
  }
  setProps(props: Partial<P>) {
    const entries = Object.entries(props);
    entries.forEach(([key, value]) => {
      Reflect.set(this, key, value);
    });
  }
  set(partialProps: Partial<P>) {
    this.setProps(partialProps);
  }
  init() {}
}
