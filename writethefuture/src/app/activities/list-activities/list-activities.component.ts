import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivityModel } from 'src/app/data/activity.model';


@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {
  @Input() activitiesList: ActivityModel[];
  @Output() addItemPlan: EventEmitter<ActivityModel> = new EventEmitter<ActivityModel>();


  constructor(
  ) { }

  ngOnInit() {
  }

  addToDailyPlan(activity: ActivityModel) {
    this.addItemPlan.emit(activity);
  }
}
