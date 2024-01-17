import { IsNumberString, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  name: string;

  @IsNumberString()
  register: string;

  @IsString()
  department: string;
}
