import { IsString } from "class-validator";
export class UpdateUserDto {




    @IsString()
    readonly username?: string;

    @IsString()
    readonly mail?: string;

    @IsString()
    readonly password?: string;
}
