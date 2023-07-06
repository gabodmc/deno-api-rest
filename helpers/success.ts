export interface EndpointResponse {
  code?: number;
  status?: boolean;
  message: string;
  // deno-lint-ignore no-explicit-any
  body: any;
}