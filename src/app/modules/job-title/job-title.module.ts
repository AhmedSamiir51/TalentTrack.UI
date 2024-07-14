import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobTitleRoutingModule } from './job-title-routing.module';
import { JobTitleLandingPageComponent } from './job-title-landing-page/job-title-landing-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddOrEditJobTitleComponent } from './add-or-edit-job-title/add-or-edit-job-title.component';


@NgModule({
  declarations: [
    JobTitleLandingPageComponent,
    AddOrEditJobTitleComponent
  ],
  imports: [
    CommonModule,
    JobTitleRoutingModule,
    SharedModule
  ]
})
export class JobTitleModule { }
