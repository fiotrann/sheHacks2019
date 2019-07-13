import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../services/activities.service';
import { ActivityModel } from '../data/activity.model';
import { PlanModel } from 'src/app/data/plan.model';
import { UsersConst } from '../data/users';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html'
})
export class ActivitiesComponent implements OnInit {
  activities: ActivityModel[];
  customisedValues: PlanModel;
  users: { id: number; name: string; image: string }[];

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit() {
    this.activities = this.getList();

    this.users = UsersConst;
  }

  getList() {
    return this.activitiesService.getActivities();
  }

  addToPlan(item: ActivityModel) {
    this.activitiesService.addToDailyPlanList(item);
    this.activities = this.activitiesService.removeActivity(item);
  }

  updateActivities(item: ActivityModel) {
    this.activitiesService.updateActvitiesList(item);
  }

  reload() {
    this.activities = this.getList();
  }

  getPlanDetails(plan: PlanModel) {
    this.customisedValues = plan;
  }
}
