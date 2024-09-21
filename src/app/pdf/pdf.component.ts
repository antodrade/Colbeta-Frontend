import { Component, OnInit } from '@angular/core';
// import { TablesComponent } from 'app/tables/tables.component';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
const myVfs = {...pdfFonts.pdfMake.vfs};

@Component({
  
  selector: 'pdf',
  templateUrl: './pdf.component.html',

})

export class PdfComponent implements OnInit  
// implements OnInit 
{
  // tableData: any[] = [];

  constructor(
    // private table: TablesComponent
  ) { }

  ngOnInit(): void {
  //   // this.table.obtenerUsuarios();
  //   // this.tableData.push([ 'ID', 'Nombre', 'Primer Apellido', 'Segundo Apellido','EPS'])
  //   // for (const usuario of this.table.usuarios){
  //   //   this.tableData.push([usuario.idUser,usuario.name1,usuario.lastname1,usuario.lastname2,usuario.eps]);
   }

  //   createPDF(){
   
  //  //     const pdfDefinition: any = {
  //  //       content: [
  //  //         {
  //  //           table: {
  //  //             headerRows: 1,
  //  //             body: this.tableData // Rellena dinámicamente el cuerpo de la tabla
  //  //           }
  //  //         }
  //  //       ]
  //  //     };
   
   
   
  //  // const pdf = pdfMake.createPdf(pdfDefinition);
  //  //     pdf.open();
  //     }
  }




