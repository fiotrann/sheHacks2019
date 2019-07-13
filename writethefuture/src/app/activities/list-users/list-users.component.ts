import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivityModel } from 'src/app/data/activity.model';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  @Input() usersList: ActivityModel[];
  @Output() addItemPlan: EventEmitter<ActivityModel> = new EventEmitter<
    ActivityModel
  >();

  constructor() {}

  ngOnInit() {}

  addToDailyPlan(activity: ActivityModel) {
    this.addItemPlan.emit(activity);
  }
}
