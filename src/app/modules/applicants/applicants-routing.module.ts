import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantsLandingPageComponent } from './applicants-landing-page/applicants-landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicantsLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantsRoutingModule { }
