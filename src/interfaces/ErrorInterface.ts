/**
 * rafflejs
 * interface for custom errors
 *
 * @author João Victor
 * @licence MIT
 */

interface IError {
  message: string;
  data: {
    type: string;
  };
}

export default IError;
