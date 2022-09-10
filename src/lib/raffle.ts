/**
 * rafflejs
 * An easy way to raffle values
 *
 * @author João Victor
 * @licence MIT
 */

import RaffleError from "../customErrors/RaffleError";

function handleErrors<T>(values: T[], numberDrawns: number): void {
  if (!Array.isArray(values)) {
    throw new RaffleError({
      message: "The values parameter must be an array",
      data: {
        type: "0",
      },
    });
  }

  if (typeof numberDrawns !== "number") {
    throw new RaffleError({
      message: "The numberDrawns parameter must be a number",
      data: {
        type: "0",
      },
    });
  }

  for (let i = 0; i < values.length; i++) {
    const currentValue = values[i];
    for (let x = 0; x < values.length; x++) {
      if (x !== i && currentValue === values[x]) {
        throw new RaffleError({
          message: "Cannot repeat the same value in the array",
          data: {
            type: "1",
          },
        });
      }
    }
  }

  if (numberDrawns > values.length) {
    throw new RaffleError({
      message: "The number of drawns cannot be bigger than the values length",
      data: {
        type: "2",
      },
    });
  }
}

function raffle<T>(values: T[], numberDrawns = 1): T[] {
  handleErrors(values, numberDrawns);

  const valuesCopy = [...values];
  const drawnValues = <T[]>[];
  for (let i = 0; i < numberDrawns; i++) {
    const arrayPostion = Math.floor(Math.random() * valuesCopy.length);
    drawnValues.push(valuesCopy[arrayPostion]);

    if (numberDrawns > 1) {
      valuesCopy.splice(arrayPostion, 1);
    }
  }

  return drawnValues;
}

export default raffle;
