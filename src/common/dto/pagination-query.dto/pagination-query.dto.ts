import { IsOptional, IsPositive } from "class-validator";

export class PaginationQueryDto {
    @IsOptional()
    @IsPositive()
    limit: Number

    @IsOptional()
    @IsPositive()
    offset: number
}
