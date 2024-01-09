// Define a class named ApiError that extends the built-in Error class
class ApiError extends Error {
  // Constructor for creating instances of the ApiError class
  constructor(
    // Parameters for the constructor function, with default values provided
    statusCode,
    message = "Something went wrong. Please try again later.",
    errors = [],
    stack = ""
  ) {
    // Call the constructor of the parent class (Error) with the provided message
    super(message);

    // Initialize instance properties with the provided values or defaults
    this.statusCode = statusCode; // HTTP status code associated with the error
    this.data = null; // Additional data associated with the error (initially set to null)
    this.errors = errors; // An array containing details about the errors
    this.stack = stack; // The call stack trace for the error
    this.message = message; // The error message

    // Additional property indicating the success status (initially set to false)
    this.success = false;

    // Check if a stack trace was provided
    if (stack) {
      // If a stack trace is provided, extract and assign it to the instance's stack property
      this.stack = stack.stack;
    } else {
      // If no stack trace is provided, capture the current stack trace for the instance
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
