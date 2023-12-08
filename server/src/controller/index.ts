import { Request, Response } from "express";
import Joi from "joi";
import {
  responseInvalidArgumentsError,
  internalServerError,
} from "../config/commonResponse";
import { ChainId } from "../config/networkConfig";

export const createWalletController = async (req: Request, res: Response) => {
  try {
    const validation = Joi.object({
      userName: Joi.string().min(50).required(),
      passwordHash: Joi.string().min(255).required(),
    });

    const responseValidation = validation.validate(req.body);
    if (responseValidation.error) {
      return responseInvalidArgumentsError(res, responseValidation);
    }
  } catch (error: any) {
    return internalServerError(res, error);
  }
};

export const executeTxController = async (req: Request, res: Response) => {
  try {
    const validation = Joi.object({
      callee: Joi.string().min(50).required(),
      value: Joi.required(),
      data: Joi.required(),
      passwordHash: Joi.string().min(255).required(),
      chainId: Joi.number()
        .valid(...Object.values(ChainId))
        .required(),
    });

    const responseValidation = validation.validate(req.body);
    if (responseValidation.error) {
      return responseInvalidArgumentsError(res, responseValidation);
    }
  } catch (error: any) {
    return internalServerError(res, error);
  }
};

export const setupGuardianController = async (req: Request, res: Response) => {
  try {
    const validation = Joi.object({
      passwordHash: Joi.string().min(255).required(),
    });

    const responseValidation = validation.validate(req.body);
    if (responseValidation.error) {
      return responseInvalidArgumentsError(res, responseValidation);
    }
  } catch (error: any) {
    return internalServerError(res, error);
  }
};

export const getBalanceController = async (req: Request, res: Response) => {
  try {
    const validation = Joi.object({
      chainId: Joi.string()
        .valid(...Object.values(ChainId))
        .required(),
      address: Joi.string().required(),
    });

    const responseValidation = validation.validate(req.params);
    if (responseValidation.error) {
      return responseInvalidArgumentsError(res, responseValidation);
    }
  } catch (error: any) {
    return internalServerError(res, error);
  }
};

export const txHistoryController = async (req: Request, res: Response) => {
  try {
    const validation = Joi.object({
      chainId: Joi.number()
        .valid(...Object.values(ChainId))
        .required(),
      address: Joi.string().required(),
    });

    const responseValidation = validation.validate(req.params);
    if (responseValidation.error) {
      return responseInvalidArgumentsError(res, responseValidation);
    }
  } catch (error: any) {
    return internalServerError(res, error);
  }
};
