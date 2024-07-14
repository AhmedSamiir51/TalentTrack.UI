import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

export const routes: Routes = [
  { path: '', component: NotFoundComponent, pathMatch: 'full'}
];
@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule

  ]
})
export class ErrorNotFoundModule { }
