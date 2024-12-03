import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status } from '../enums/Status.enum';

type Itemlist = {
    itemName: string,
    itemQuantity: number,
    itemRate: number
}

@Schema()
export class Invoice extends Document {
    @Prop()
    invoiceId: string;

    @Prop()
    profielPicUrl: string;

    @Prop()
    senderName: string;

    @Prop()
    senderEmail: string;

    @Prop()
    senderAddress: string;

    @Prop()
    recipientName: string;

    @Prop()
    recipientEmail: string;

    @Prop()
    recipientAddress: string;

    @Prop()
    billTitle: string;

    @Prop()
    issuedOn: string;

    @Prop()
    dueDate: string;

    @Prop()
    terms: string;

    @Prop()
    itemList: Itemlist[];

    @Prop({ default: Status.UNPAID, enum: Status })
    status: Status;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
