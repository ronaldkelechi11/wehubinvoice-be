import { Body, Controller, Post, Get, Delete } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceDTO } from 'src/utils/dto/invoice.dto';

@Controller('invoice')
export class InvoiceController {
    constructor(private invoiceService: InvoiceService) { }

    // Create Invoice
    @Post()
    createInvoice(@Body() invoiceDTO: InvoiceDTO) {
        return this.invoiceService.createInvoice(invoiceDTO);
    }

    // Read Invoice
    @Get()
    readInvoice(@Body('invoiceId') invoiceId: string) {
        return this.invoiceService.readInvoice(invoiceId)
    }

    // Delete Invoice
    @Delete()
    deleteInvoice(@Body('invoiceId') invoiceId: string) {
        return this.invoiceService.deleteInvoice(invoiceId)
    }
}
