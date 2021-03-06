import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivityModel } from 'src/app/data/activity.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {
  @Input() activitiesList: ActivityModel[];
  @Output() addItemPlan: EventEmitter<ActivityModel> = new EventEmitter<
    ActivityModel
  >();
  show = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  addToDailyPlan(activity: ActivityModel) {
    this.addItemPlan.emit(activity);
  }

  activitiesDetails() {
    this.show = true;
    this.router.navigate(['activities/details']);
  }
}
