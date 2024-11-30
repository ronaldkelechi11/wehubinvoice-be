import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/utils/schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    // Create User
    async createUser(user) {
        try {
            if (!user) {
                throw new BadRequestException('Invalid User Details');
            }

            await this.userModel.create(user);
        } catch (error) {
            if (error instanceof BadRequestException) {
                throw error; // Let the BadRequestException propagate
            }
            throw new ConflictException(error.message || 'Failed to add package');
        }
        return 'success'
    }

    // Get User
    async getUser(userId) {
        const user = await this.userModel.findOne({ userId: userId })
        if (!user) {
            throw new NotFoundException();
        }
        else {
            return user;
        }
    }
}
