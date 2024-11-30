type Itemlist = {
    itemName: string,
    itemQuantity: number,
    itemRate: number
}
export class InvoiceDTO {
    invoiceId: string;
    userId: string;
    profielPicUrl: string;
    senderName: string;
    senderEmail: string;
    senderAddress: string;
    recipientName: string;
    recipientEmail: string;
    recipientAddress: string;
    billTitle: string;
    issuedOn: string;
    dueDate: string;
    terms: string;
    itemList: Itemlist[];
}