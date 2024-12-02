import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/utils/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    // Create User
    async createUser(user) {
        const myUser = user.payload

        // 400
        if (!myUser) {
            throw new BadRequestException('Invalid User Details');
        }

        await this.userModel.create(myUser);
        return 'success'
    }

    // Get User
    async getUser(email) {
        const user = await this.userModel.findOne({ email: email })
        if (!user) {
            throw new NotFoundException();
        }
        else {
            return user;
        }
    }
}
