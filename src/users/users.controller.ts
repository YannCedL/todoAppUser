import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { CreateUserDto } from './dto/create-user.dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userservice: UserService) {

    }

    @Get()
    findAll(@Query() paginationQuery) {
        //const { limit, offset } = paginationQuery;
        return this.userservice.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.userservice.findOne('' + id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userservice.create(createUserDto);

    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userservice.update(id, updateUserDto);
    }

    @Delete(';id')
    remove(id: string) {
        return this.userservice.remove(id)
    }
}
