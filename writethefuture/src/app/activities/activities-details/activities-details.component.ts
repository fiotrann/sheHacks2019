import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivityModel } from 'src/app/data/activity.model';

@Component({
  selector: 'app-activities-details',
  templateUrl: './activities-details.component.html',
  styleUrls: ['./activities-details.component.css']
})
export class ActivitiesDetailsComponent implements OnInit {
  @Input() activitiesList: ActivityModel[];
  @Output() addItemPlan: EventEmitter<ActivityModel> = new EventEmitter<
    ActivityModel
  >();

  constructor() {}

  ngOnInit() {}

  addToDailyPlan(activity: ActivityModel) {
    this.addItemPlan.emit(activity);
  }
}
