import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { formatDateToDDMMYYYY } from '@/utils/DateFormatter';
import { Button } from '../Buttons/Button';

const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 60,
        paddingVertical: 40,
        fontSize: 12,
    },
    header: {
        textAlign: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 12,
    },
    section: {
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    col: {
        flexDirection: 'column',
        marginBottom: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
    footer: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'right',
        fontWeight: 'bold',
        paddingHorizontal: 20
    },
    paid: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
        fontStyle: 'semibold'
    },
    subtotal: {
        paddingHorizontal: 20,
        paddingVertical: 30
    }
});

interface Invoice {
    id?: number;
    paidDate: string;
    paidOn: string;
    dueDate: string;
    member: {
        id: number;
        Firstname: string;
        Lastname: string;
        address: string;
        contact: string;
        dob: Date;
        gender: string;
        IsMarried: boolean;
        admissionDate: string;
        cardNumber: string;
        balance: string;
    };
    facility: string;
    fees: number;
    admFee: number;
    PaymentType: string;
}

interface DownloadInvoiceProps {
    invoice: Invoice;
}

interface PdfViewerProps {
    invoice: Invoice;
}

export const InvoiceTemplate = (invoice: Invoice) => (
    <Document>
        <Page size={[800, 400]} style={styles.page}>
            <View style={styles.row}>
                <View style={styles.header}>
                    <Text style={styles.title}>Sandys FITNESS CARE GYMNASIUM</Text>
                    <Text style={styles.subTitle}>Mohopada, Behind Shivsena Shakha, Tal. Khalapur, Dist. Raigad.</Text>
                </View>
                <View style={styles.section}>
                    <View style={styles.col}>
                        <Text>Receipt no: {invoice.id}</Text>
                        <Text>Paid on: {formatDateToDDMMYYYY(invoice.paidDate)}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text>Mobile: {invoice.member.contact}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.paid}>
                <Text style={styles.bold}>Mr. {invoice.member.Firstname} {invoice.member.Lastname}</Text>
                <Text>A Sum Of Rupees: <Text style={styles.bold}>{invoice.fees} Rupees</Text> (In Words)</Text>
            </View>

            <View style={styles.subtotal}>
                <View style={styles.row}>
                    <Text style={styles.bold}>Facility</Text>
                    <Text style={styles.bold}>Start</Text>
                    <Text style={styles.bold}>Due</Text>
                    <Text style={styles.bold}>Adm. Fee</Text>
                    <Text style={styles.bold}>Amount</Text>
                </View>
                <View style={styles.row}>
                    <Text>{invoice.facility}</Text>
                    <Text>{formatDateToDDMMYYYY(invoice.paidOn)}</Text>
                    <Text>{formatDateToDDMMYYYY(invoice.dueDate)}</Text>
                    <Text>{invoice.admFee}</Text>
                    <Text>{invoice.fees}</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.footer}>
                    <Text>Total Amount: {invoice.fees}</Text>
                </View>
                <View style={styles.footer}>
                    <Text>Sign</Text>
                </View>
            </View>
        </Page>
    </Document>
);

export const DownloadInvoice: React.FC<DownloadInvoiceProps> = ({ invoice }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return <p>Loading...</p>;

    return (
        <div>
            <PDFDownloadLink
                document={<InvoiceTemplate {...invoice} />}
                fileName={`invoice_${invoice.id}.pdf`}
            >
                 <Button Name={'Download Invoice'} btnColor='bg-green-500' />
            </PDFDownloadLink>
        </div>
    );
};

export const PdfViewer: React.FC<PdfViewerProps> = ({ invoice }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return <p>Loading PDF viewer...</p>;

    return (
        <PDFViewer width="100%" height="600px">
            <InvoiceTemplate {...invoice} />
        </PDFViewer>
    );
};
