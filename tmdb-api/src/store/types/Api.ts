export interface IApiCallBeganPayload {
  url: string;
  method: string;
  data?: any;
  onStart?: string;
  onSuccess?: string;
  onFailed?: string;
}
