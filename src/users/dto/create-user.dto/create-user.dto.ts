import { IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    readonly username: string;

    @IsString()
    readonly mail: string;

    @IsString()
    readonly password: string;
}
