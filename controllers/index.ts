import { NextFunction, Request, Response } from "npm:express@4.18.2";
import { createError } from "https://deno.land/x/http_errors@3.0.0/mod.ts";
import { getSuccess, getError } from '../services/index.ts';
import { EndpointResponse } from '../helpers/success.ts';

export const get = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await getSuccess();
    const successResponse: EndpointResponse = {
      code: 200,
      status: true,
      message: "[Index - GET] /success retrieved successfully",
      body: response,
    };
    res.send(successResponse)
  } catch (error) {
    const httpError = createError(
      error.statusCode,
      `[Error retrieving index] - [index - GET]: ${error.message}`,
    );
    next(httpError);
  }
};

export const getOk = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await getSuccess();
    const successResponse: EndpointResponse = {
      code: 200,
      status: true,
      message: "[Index - GET] /success retrieved successfully",
      body: response,
    };
    res.send(successResponse)
  } catch (error) {
    const httpError = createError(
      error.statusCode,
      `[Error retrieving index] - [index - GET]: ${error.message}`,
    );
    next(httpError);
  }
};

export const getBad = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await getError();
    const successResponse: EndpointResponse = {
      code: 200,
      status: true,
      message: "Operación exitosa",
      body: response,
    };
    res.send(successResponse)
  } catch (error) {
    const httpError = createError(
      error.statusCode,
      `[Error retrieving index] - [index - GET]: ${error.message}`,
    );
    next(httpError);
  }
};
