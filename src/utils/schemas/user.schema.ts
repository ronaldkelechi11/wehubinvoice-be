import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Mongoose } from 'mongoose';
import { Invoice } from './invoice.schema';

@Schema()
export class User extends Document {
    @Prop()
    userId: string;

    @Prop()
    firstname: string;

    @Prop()
    lastname: string;   

    @Prop()
    profilePicUrl: string;  

    @Prop()
    phoneNumber: string; 

    @Prop()
    businessName: string;   

    @Prop()
    businessAddress: string;
    
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Invoice' }] })
    invoices: Invoice[];
}

export const UserSchema = SchemaFactory.createForClass(User);
