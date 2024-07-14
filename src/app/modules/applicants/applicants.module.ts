import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicantsRoutingModule } from './applicants-routing.module';
import { ApplicantsLandingPageComponent } from './applicants-landing-page/applicants-landing-page.component';
import { AddOrEditApplicantsComponent } from './add-or-edit-applicants/add-or-edit-applicants.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ApplicantsLandingPageComponent,
    AddOrEditApplicantsComponent
  ],
  imports: [
    CommonModule,
    ApplicantsRoutingModule,
    SharedModule
  ]
})
export class ApplicantsModule { }
