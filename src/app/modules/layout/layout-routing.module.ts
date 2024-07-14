import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/job-title',
        pathMatch: 'full',
      },
      {
        path: 'job-title',
        loadChildren: () =>
        import('../job-title/job-title.module').then((p) => p.JobTitleModule),
      },
      {
        path: 'applicants',
        loadChildren: () =>
        import('../applicants/applicants.module').then((p) => p.ApplicantsModule),
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
