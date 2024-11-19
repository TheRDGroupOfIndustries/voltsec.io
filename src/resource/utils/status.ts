import { IStatus } from "@/resource/types/index";

const status: IStatus = {
  success: 200,
  failed: 404,
  notFound: 404,
  forbidden: 403,
  badRequest: 400,
  internalServerError: 500,
  serviceUnavailable: 503,
  gatewayTimeout: 504,
};
export default status;
