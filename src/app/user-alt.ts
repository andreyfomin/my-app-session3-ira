export class UserAlt {
  public name: string;
  public phone: string;
  public date: Date;

  constructor(name?: string, phone?: string) {
    this.name = name;
    this.phone = phone;
    this.date = new Date();
  }
}
