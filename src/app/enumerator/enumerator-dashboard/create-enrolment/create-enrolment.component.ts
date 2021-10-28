import { Component, OnInit } from '@angular/core';
import { GetStateAndLgaDto, LGA } from 'src/app/dto-interfaces/get-state-and-lga-dto';
import { UtilityService } from 'src/app/shared-services/utility.service';

@Component({
  selector: 'app-create-enrolment',
  templateUrl: './create-enrolment.component.html',
  styleUrls: ['./create-enrolment.component.css']
})
export class CreateEnrolmentComponent implements OnInit {

  states!: GetStateAndLgaDto[];
  LGAs!: LGA[];
  selectedState: GetStateAndLgaDto | any;

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
          this.states = response;
        },
        (error: any) => console.log(error)
      )
  }

  filterLGAs() {
    this.states.forEach((state) => {
      if (state.state.name == this.selectedState) {
        this.LGAs = state.state.locals;
      }
    })
  }

}
