export class NpmJs {
  env: string;
  constructor(n: string) {
    this.env = n;
  }
  init(): string {
    return this.env;
  }
}
