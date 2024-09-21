import { RouterModule } from "@angular/router";
import { TablesComponent } from "./tables.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PruebaComponent } from "app/prueba/prueba.component";
import { PdfComponent } from "../pdf/pdf.component";




@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [ TablesComponent, PruebaComponent, PdfComponent ],
    exports: [ TablesComponent ]
})

export class TablesModule {}