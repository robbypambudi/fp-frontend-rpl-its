export type UninterceptedApiError = {
  success: boolean;
  message: string | Record<string, string[]>;
  status: number;
};

export type ApiReturn<T> = {
  success: boolean;
  message: string;
  status: number;
  data: T;
};

export type ApiError = {
  success: boolean;
  message: string;
  status: number;
};

export interface PaginatedApiResponse<DataType, metaType> {
  success: boolean;
  message: string;
  status: number;
  data: DataType;
  meta:
    | ({
        last_page: number;
        total: number;
      } & metaType)
    | null;
}
