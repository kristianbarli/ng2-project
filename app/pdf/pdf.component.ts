import { Component, OnInit } from '@angular/core';

declare var pdfMake: any;

@Component({
    selector: 'pdf',
    templateUrl: 'app/pdf/pdf.component.html'
})

export class PdfComponent implements OnInit {
    
   
    
    constructor() { }

    ngOnInit() {
        
    }

    title = "PDF Test!";
    
    createPdf(pdfContent) {
        var docDefinition = { content: pdfContent };

        // open the PDF in a new window
        if (pdfContent) {
            pdfMake.createPdf(docDefinition).open();
        }
        

    }

}