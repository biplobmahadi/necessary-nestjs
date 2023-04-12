import { TUser } from 'src/types/user.type';

export class User {
  readonly name: string;
  readonly email: string;
  readonly age: number;
  readonly phone: string;
  readonly role: TUser[];
  readonly address: string;
}
