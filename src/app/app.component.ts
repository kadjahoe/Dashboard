import { Component } from "@angular/core";
import { from, BehaviorSubject } from "rxjs";
import { filter, map } from "rxjs/operators";
import { DataService } from "../app/data.service";

// class created to utilize ngModel for two-way binding
class Range {
  constructor(public range: number) {}
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DataService]
})
export class AppComponent {
  // imported the data service as a provider to this component
  // this component now has access to the data and it's functions
  constructor(private dataService: DataService) {}
  //variable used to search by counselor
  counselor;
  // BehaviorSubject to set the initial value of slider
  // that will be observed for changes.
  range = new BehaviorSubject<number>(0);

  // sets the counselor clicked to the counselor
  // value created above
  setCounselor = counselor => {
    this.counselor = counselor;
  };
  // sets the number to aggregate data for students
  // with attendancePercentage less than or equal
  setStudentAttenRange = range => {
    this.range.next(range);
  };
  // two way binding of range
  model = new Range(0);
  // dashboard title interpolation
  title = "Dashboard";
  //populates the counselors variable for interpolation
  counselors = this.dataService.getCounselors();
}
