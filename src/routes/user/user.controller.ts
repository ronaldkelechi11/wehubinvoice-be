import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
    @Get(':userEmail')
    getUser(@Param('userEmail') userEmail: string) {
        return this.userService.getUser(userEmail);
    }
}
