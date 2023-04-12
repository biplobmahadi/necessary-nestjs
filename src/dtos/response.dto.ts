export class ResponseDto {
  isSuccess: boolean;
  statusCode: number = 200;
  message: string;
  body: any;
}
