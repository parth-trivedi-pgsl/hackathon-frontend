import { HttpParams } from "@angular/common/http";

export enum responseStatus {
  Success = "Success",
  Failure = "Failure"
}

export type GetParamsType = HttpParams | {
  [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
};

export interface IAPIErrorData {
  ErrorCode: string;
  Error: string;
  ErrorDetail: Object;
}

export interface IAPIResponse<T> {
  ErrorData: IAPIErrorData;
  Message: string;
  ResponseData: T;
  ResponseStatus: string;
}

export function isDefined<T>(value: T) {
  return value !== null && value !== undefined;
}

export function isNotEmptyArray<T extends { length: number }>(value: T) {
  return isDefined(value) && Array.isArray(value) && value.length;
}