import { Component, OnInit } from "@angular/core";
import { DataService } from "../../app/data.service";
@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"],
  providers: [DataService]
})
export class StatisticsComponent implements OnInit {
  constructor(private dataService: DataService) {}
  ngOnInit() {}
  // list of all grades to interpolate in the statistics section of dashboard
  grades = this.dataService.getGrades();
  // list the overall minimum, maximum, & average for each grade
  overallStats = this.dataService.processGradeAttendanceStats();
}
