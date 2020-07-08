import React, { useState } from "react";
import Axios from "axios";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { PdfDocument } from "./InvoiceDoc";

export default function InvoicePDFCreator(props) {

    return (
        <div className="container">
            <PDFDownloadLink
                document={<PdfDocument invoice={props.invoice} />}
                fileName={`invoice-${props.invoice.invoiceNo}.pdf`}
                style={{
                textDecoration: "none",
                padding: "5px",
                fontSize: "10px",
                color: "#4a4a4a",
                backgroundColor: "#f2f2f2",
                border: "1px solid #4a4a4a"
                }}
            >
                Download Pdf
                
            </PDFDownloadLink>
        </div>
  );
}

