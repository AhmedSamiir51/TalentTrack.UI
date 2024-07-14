import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutRoutingModule
  ],
  exports:[
  ]
})
export class LayoutModule { }
