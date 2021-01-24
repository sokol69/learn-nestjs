import { IAdress } from "../interfaces/adress.interface";

export class CreateUserDto {
  readonly email: string;
  readonly avatar: string;
  readonly avatarId: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly gender: string;
  readonly adress: IAdress;
  readonly profession: string;
  readonly searchField: string;
  readonly phone: string;
  readonly roles: Array<string>;
  readonly password: string;
};