export default class Event {
  private _name: string | undefined;
  private _once: boolean | undefined;
  private _execute: Function;

  constructor(name?: string, once?: boolean) {
    if (name != undefined) this._name = name;
    if (once != undefined) this._once = once;
    this._execute = () => {};
  }

  setName(name: string) {
    this._name = name;
    return this;
  }

  setOnce(once: boolean) {
    this._once = once;
    return this;
  }

  get name(): string | undefined {
    return this._name;
  }

  get once(): boolean | undefined {
    return this._once;
  }

  get execute(): Function {
    return this._execute;
  }
}
