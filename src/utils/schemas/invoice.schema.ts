import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status } from '../enums/Status.enum';
import { Currency } from '../enums/currency.enum';

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

    @Prop({ required: true })
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

    @Prop({ default: Currency.NGN, enum: Currency })
    currency: Currency;
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);
