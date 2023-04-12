import { ApiProperty } from '@nestjs/swagger';
import { userRole } from 'src/consts/userRole.const';
import { TUser } from 'src/types/user.type';

export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly age: number = 22;
  readonly phone: string;
  @ApiProperty({ enum: userRole })
  readonly role: TUser[];
  readonly address?: string;
}
