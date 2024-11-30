import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from 'src/utils/schemas/invoice.schema';
import { User, UserSchema } from 'src/utils/schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Invoice.name,
                schema: InvoiceSchema
            },
            {
                name: User.name,
                schema: UserSchema
            }
        ])
    ],
    controllers: [
        InvoiceController,],
    providers: [
        InvoiceService,],
})
export class InvoiceModule { }
