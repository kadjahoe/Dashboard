import { Component, Input } from "@angular/core";
import { DataService } from "../data.service";
import { AccordionComponent } from "../accordion/accordion.component";

@Component({
  selector: "app-child-accordion",
  templateUrl: "./child-accordion.component.html",
  styleUrls: ["./child-accordion.component.scss"],
  providers: [DataService]
})
export class ChildAccordionComponent {
  // variable to hold the list of students found
  @Input() students: Array<any>;

  constructor(private dataService: DataService) {}
}
