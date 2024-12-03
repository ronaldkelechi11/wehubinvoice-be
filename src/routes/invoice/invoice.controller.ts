import { Body, Controller, Post, Get, Delete, Param, Put } from '@nestjs/common';
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
    @Get(':invoiceId')
    readInvoice(@Param('invoiceId') invoiceId: string) {
        return this.invoiceService.readInvoice(invoiceId)
    }

    // Change Invoice Status 
    @Put(':invoiceId')
    changeInvoiceStatus(@Param('invoiceId') invoiceId: string) {
        return this.invoiceService.changeStatus(invoiceId);
    }

    // Delete Invoice
    @Delete()
    deleteInvoice(@Body('invoiceId') invoiceId: string) {
        return this.invoiceService.deleteInvoice(invoiceId)
    }
}
