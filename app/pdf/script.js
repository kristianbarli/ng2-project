var docDefinition = { content: 'This is an sample PDF printed with pdfMake' };

// open the PDF in a new window
pdfMake.createPdf(docDefinition).open();

// print the PDF (not working in this version, will be added back in a couple of days)
// pdfMake.createPdf(docDefinition).print();

// download the PDF
// pdfMake.createPdf(docDefinition).download();