
interface ErrorResponeInterFace {
  statusCode: number;
  error: string;
  message?: string
  data?: any;
}



type ConfigAPi = RequestInit & {
  timeout?: number;
  params?: { [x: string]: any };
  baseURL?: string;
  url?: string;
  isLogger?: boolean;
};


type Interceptor = {
  request?: (config: ConfigAPi) => Promise<ConfigAPi>;
  response?: (
    response: Response,
    data: any,
    config: ConfigAPi,
  ) => Promise<Response>;
};

export type { ConfigAPi, Interceptor , ErrorResponeInterFace };
