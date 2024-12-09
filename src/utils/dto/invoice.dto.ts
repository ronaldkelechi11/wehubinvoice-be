type Itemlist = {
    itemName: string,
    itemQuantity: number,
    itemRate: number
}

export class InvoiceDTO {
    invoiceId: string;
    profilePicUrl: string;
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
    currency: string;
}