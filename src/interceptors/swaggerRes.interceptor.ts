import { Type, applyDecorators } from '@nestjs/common';
import { ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { ResponseDto } from 'src/dtos/response.dto';

export const ApiResponseCommon = <TModel extends Type<any>>(model: TModel) => {
  return applyDecorators(
    ApiOkResponse({
      schema: {
        allOf: [
          { $ref: getSchemaPath(ResponseDto) },
          {
            properties: {
              body: { $ref: getSchemaPath(model) },
            },
          },
        ],
      },
    }),
  );
};
