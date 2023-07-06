class ErrorObject extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;
  // deno-lint-ignore no-explicit-any
  public errors: any[];

  // deno-lint-ignore no-explicit-any
  constructor(message: string, statusCode: number, errors: any[] = []) {
    super();

    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    this.errors = errors;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorObject;
