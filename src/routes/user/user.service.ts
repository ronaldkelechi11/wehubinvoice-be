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

    // Return User
    async getUser(userId) {
        const user = await this.userModel.findOne({ userId: userId })
        if (!user) {
            throw new NotFoundException();
        }
        else {
            return user;
        }
    }

    // Add Invoice to User
    async addInvoice(userId, invoiceId) {
        const user = await this.userModel.findOneAndUpdate({ userId: userId },
            { $push: { invoices: invoiceId } })
        return user;
    }


    // Update User
    // async updateUser(user) {
    //     // Find the original User by userId
    //     const originalUser = await this.userModel.findOne({
    //         userId: user.userId,
    //     });

    //     if (!originalUser) {
    //         throw new BadRequestException('User not found');
    //     }

    //     // Compare the original and the updated values
    //     const hasChanges = Object.keys(user).some((key) => {
    //         return user[key] !== originalUser[key];
    //     });

    //     if (!hasChanges) {
    //         return { message: 'No changes detected', updatePackage: originalUser };
    //     }

    //     // Update the package and return the updated document
    //     const updatedUser = await this.userModel.findOneAndUpdate(
    //         { userId: user.userId },
    //         { $set: user }, // Only set fields that are provided
    //         { new: true },
    //     );

    //     return { message: 'success', updatedUser };
    // }
}
