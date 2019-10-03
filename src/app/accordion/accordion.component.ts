import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../../app/data.service";
import { BehaviorSubject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.scss"],
  providers: [DataService]
})
export class AccordionComponent implements OnInit {
  constructor(private dataService: DataService) {}
  // variable that are used to store counselor selected
  @Input() counselor: string;
  // variable used as the behavior subject to be watched
  @Input() range: BehaviorSubject<number>;
  // this is for subscribing to the debounce time method
  _range: number;
  // students filtered by counselor
  studentsByCounselor = this.dataService.searchStudents();
  // students filtered by grade
  studentsByGrade = this.dataService.studentsByGrade();
  // all grades that exist in the data
  grades = this.dataService.getGrades();
  // condition function to check what the user wants to display
  filterStudents = students => {
    let message = [
      {
        Error:
          "There are no students with that attendance percentage. Please try a higher percentage."
      }
    ];
    // if the slider is used
    if (this._range !== 0) {
      // filter the data based on range value & attendancePercentage
      let studentsCheck = students.filter(
        student => student.attendancePercentage <= this._range
      );
      // check to see if the filtered data returned with 0 students found
      // with those conditions
      if (studentsCheck.length > 0) {
        // if students were found return the list of students
        return studentsCheck;
      } else {
        // if no students were found return a message
        return message;
      }
    } else {
      // if not using slider display data the default way
      return students;
    }
  };
  // function to control the delay between the user's
  // mouse movements and the range value selected
  // to limit server calls and reduce delay of data loading
  ngOnInit() {
    this.range
      .pipe(debounceTime(500))
      .subscribe(value => (this._range = value));
  }
}
