import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGirdComponent } from './ag-gird/ag-gird.component';
import { HandsonTableComponent } from './handson-table/handson-table.component';
import { PluginRoutingModule } from './plugin.routing.module';
import { HotTableModule } from '@handsontable/angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        AgGirdComponent,
        HandsonTableComponent],
    imports: [
        CommonModule,
        PluginRoutingModule,
        SharedModule,
        HotTableModule.forRoot()
    ]
})
export class PluginModule { }
