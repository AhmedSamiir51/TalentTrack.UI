export interface BaseResponse<T> {
  success: boolean;
  errorCodeStatus: number;
  data: T;
  message: string;
}

export interface BaseSearchResult<T> {
  totalCount: number;
  results: T;
}
