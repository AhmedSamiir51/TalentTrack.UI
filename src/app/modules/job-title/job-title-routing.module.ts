import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobTitleLandingPageComponent } from './job-title-landing-page/job-title-landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: JobTitleLandingPageComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobTitleRoutingModule { }
