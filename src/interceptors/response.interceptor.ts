export const responseInterceptor = (response: any) => {
  return {
    isSuccess: true,
    statusCode: 200,
    message: 'ok',
    body: response,
  };
};
