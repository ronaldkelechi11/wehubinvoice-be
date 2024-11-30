import { InvoiceService } from './invoice.service';
import { InvoiceController } from './invoice.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Invoice, InvoiceSchema } from 'src/utils/schemas/invoice.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Invoice.name,
                schema: InvoiceSchema
            }
        ])
    ],
    controllers: [
        InvoiceController,],
    providers: [
        InvoiceService,],
})
export class InvoiceModule { }
