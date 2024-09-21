import { Component, Injectable, NgModule, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'app/models/usuario';
import { PdfComponent } from 'app/pdf/pdf.component';
import { PruebaComponent } from 'app/prueba/prueba.component';
import { UsuarioService } from 'app/service/usuario.service';
import { SidebarModule } from "../sidebar/sidebar.module";


// @Injectable({
//   providedIn: 'root'
// })

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({

  selector: 'app-tables',
  templateUrl: './tables.component.html',
})



export class TablesComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    public usuarios: Usuario[];
    // public usuarios2: string[][];
    public usuarios3: string[][];
  constructor(private usuarioServicio: UsuarioService, private enrutador:Router) { }

  ngOnInit() {

    this.obtenerUsuarios();

    // let usuarios2 = [
    //     { idUser: 1, name1: 'Juan', lastname1: 'Pérez', eps: 'EPSX' },
    //     { idUser: 2, name1: 'María', lastname1: 'González', eps: 'EPSY' },
    //     // ... más usuarios
    //   ];

       this.usuarios3 = [
        ['1','Juan','Perez','Sura'],
        ['2','Daniela','Sanabria','Sanitas']
        // ... más usuarios
      ];
    
   
      this.tableData1 = {
          headerRow: [ 'ID', 'Nombre', 'Primer Apellido', 'Segundo Apellido','EPS'],
          dataRows: [
              ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
              ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
              ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
              ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
              ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
              ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
          dataRows: [
              ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
              ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
              ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
          ]
      };
  }

  obtenerUsuarios(){
    this.usuarioServicio.ObtenerUsuariosLista().subscribe(
        (datos => {
            this.usuarios = datos;
        })
    );
   
  }

 


}
