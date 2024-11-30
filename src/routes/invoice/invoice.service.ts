import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice } from 'src/utils/schemas/invoice.schema';

@Injectable()
export class InvoiceService {
    constructor(@InjectModel(Invoice.name) private invoiceModel: Model<Invoice>) { }

    // Create Invoice
    async createInvoice(invoice) {
        if (!invoice) {
            throw new BadRequestException('Invalid Invoice Object')
        }
        else {
            await this.invoiceModel.create(invoice);
            return 'Success';
        }
    }

    // Read Invoice
    async readInvoice(invoiceId) {
        const invoice = await this.invoiceModel.findOne({ invoiceId: invoiceId })

        if (!invoice) {
            throw new NotFoundException('Invoice not found')
        }
        return invoice;
    }

    // Delete Invoice
    async deleteInvoice(invoiceId) {
        const invoice = await this.invoiceModel.findOneAndDelete({ invoiceId: invoiceId })

        if (!invoice) {
            throw new NotFoundException('Invoice not found')
        }
        return 'Invoice Deleted';
    }

}
