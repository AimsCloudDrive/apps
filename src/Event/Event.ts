export class Event<T extends {} = {}> {
  private declare eventMap: Map<
    string,
    ((event: any, type: any, self: this) => void)[]
  >;

  constructor() {
    this.eventMap = new Map();
  }

  on<K extends keyof T & string>(
    type: K,
    callback: (event: T[K], type: K, self: this) => void
  ) {
    let _event = this.eventMap.get(type);
    if (!_event) {
      this.eventMap.set(type, (_event = [callback]));
    } else {
      _event.push(callback);
    }
  }
  emit<K extends keyof T & string>(type: K, event: T[K]) {
    const _events = this.eventMap.get(type);
    if (_events) {
      _events.forEach((callback) => {
        callback &&
          typeof callback === "function" &&
          callback(event, type, this);
      });
    }
  }
}
