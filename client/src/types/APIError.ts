export class APIError extends Error {
  status: number;
  name: string;

  constructor(status: number, name: string) {
    super(`API Error occurred: ${status} - ${name}`);
    this.status = status;
    this.name = name;
  }
}
