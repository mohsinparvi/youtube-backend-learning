class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong. Please try again later.",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.errors = errors;
    this.stack = stack;
    this.message = message;
    this.success = false;
    if (stack) {
      this.stack = stack.stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

}
