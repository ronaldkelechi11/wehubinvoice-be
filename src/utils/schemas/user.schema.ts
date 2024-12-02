import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Invoice } from './invoice.schema';

@Schema()
export class User extends Document {
    @Prop({ required: true })
    firstname: string;

    @Prop({ required: true })
    lastname: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    profilePicUrl: string;

    @Prop({ required: true })
    phoneNumber: string;

    @Prop({ required: true })
    businessName: string;

    @Prop({ required: true })
    businessAddress: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' }] })
    invoices: Invoice[];
}

export const UserSchema = SchemaFactory.createForClass(User);
