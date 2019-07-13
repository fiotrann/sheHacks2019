import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities.component';
import { ActivitiesDetailsComponent } from './activities-details/activities-details.component';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent
  },
  {
    path: 'details',
    component: ActivitiesDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule {}
