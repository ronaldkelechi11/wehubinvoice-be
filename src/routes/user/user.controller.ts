import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from '../../utils/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    // Create User
    @Post()
    createUser(@Body() userDto: UserDTO) {
        return this.userService.createUser(userDto);
    }

    // Read User
    @Get()
    getUser(@Body('userId') userId: string) {
        return this.userService.getUser(userId);
    }
}
