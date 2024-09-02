import { IsNumber, IsString, MaxLength, MinLength } from 'class-validator';

export class TagDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  title: string;

  @IsNumber()
  id: number;
}
