import { Component, OnInit } from '@angular/core';
import { UtilityService } from 'src/app/shared-services/utility.service';

@Component({
  selector: 'app-create-enrolment',
  templateUrl: './create-enrolment.component.html',
  styleUrls: ['./create-enrolment.component.css']
})
export class CreateEnrolmentComponent implements OnInit {

  constructor(
    private utilityService: UtilityService
  ) { }

  ngOnInit(): void {
    this.getStates();
  }

  getStates() {
    this.utilityService.getStatesAndLocalGovts()
      .subscribe(
        (response: any) => {
          console.log(response)
        },
        (error: any) => console.log(error)
      )
  }

}
