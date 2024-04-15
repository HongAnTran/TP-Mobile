import { ErrorResponeInterFace } from "@/types/api";

export default class ErrorRespone {
  statusCode: number;
  error: string;
  message?: string
  data?: any;

  constructor({ statusCode, error, data, message }: ErrorResponeInterFace) {
    (this.statusCode = statusCode), (this.error = error);
    this.data = data;
    this.message = message
  }
}