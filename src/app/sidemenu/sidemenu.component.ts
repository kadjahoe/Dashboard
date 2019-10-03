import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DataService } from "../data.service";
@Component({
  selector: "app-sidemenu",
  templateUrl: "./sidemenu.component.html",
  styleUrls: ["./sidemenu.component.scss"],
  providers: [DataService]
})
export class SidemenuComponent implements OnInit {
  // variable to track the selected counselor based on the click event
  @Output() counselorSelected = new EventEmitter<string>();
  // list of all counselors
  counselors = this.dataService.getCounselors();
  // function to get counselor selected from side menu
  selectCounselor = (counselor: string) => {
    this.counselorSelected.emit(counselor);
  };
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
