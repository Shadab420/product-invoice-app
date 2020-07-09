import React, { useState } from "react";
import Axios from "axios";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { PdfDocument } from "./InvoiceDoc";
import { FaDownload } from 'react-icons/fa';

export default function InvoicePDFCreator(props) {

    return (
        <div className="container">
            <PDFDownloadLink
                document={<PdfDocument invoice={props.invoice} />}
                fileName={`invoice-${props.invoice.invoiceNo}.pdf`}
                className = "flex items-center bg-indigo-600 active:bg-indigo-600 hover:shadow-lg outline-none focus:outline-none text-white font-bold py-2 px-4 rounded"
            >
                <FaDownload/>
                 PDF
                
            </PDFDownloadLink>
        </div>
  );
}

