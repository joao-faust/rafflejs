/**
 * rafflejs
 * class for Raffle Errors
 *
 * @author João Victor
 * @licence MIT
 */

import IError from "../interfaces/ErrorInterface";

class RaffleError extends Error {
  private data: {
    type: string;
  };

  constructor({ message, data }: IError) {
    super(message);
    this.data = data;
    this.data.type = this.defineErrorType();
  }

  defineErrorType(): string {
    const type = String(this.data.type);

    if (type === "0") {
      return "Wrong parameter type";
    } else if (type === "1") {
      return "Repeated value";
    } else if (type === "2") {
      return "Invalid parameter";
    }

    return "";
  }
}

export default RaffleError;
