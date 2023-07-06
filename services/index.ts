import ErrorObject from '../helpers/error.ts';

// example of a service with successful action
export const getSuccess = async () => {
  try {

    const getIndex = await 'Hello World';
    console.log("paso")
    return getIndex;
  } catch (error) {
    console.log(error)
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};

// example of a service with an error
export const getError = async () => {
  try {
    throw new ErrorObject('This is an example of an error', 404);
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500);
  }
};
