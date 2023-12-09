"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statusCode = {
    OK: 200,
    CREATED: 201,
    Accepted: 202,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    REQUEST_TIMEOUT: 408,
    ALREADY_EXISTS: 409,
    GONE_OR_EXPIRED: 410,
    INVALID_ARGUMENTS: 422,
    INTERNAL_SERVER_ERROR: 500,
    TOO_MANY_REQUESTS: 429,
};
exports.default = statusCode;
