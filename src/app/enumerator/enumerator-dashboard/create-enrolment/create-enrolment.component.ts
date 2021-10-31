import { Component, OnInit, ɵɵsetComponentScope } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetBankDTO } from 'src/app/dto-interfaces/get-bank-dto';
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
  banks!: GetBankDTO[]
  constructor(
    private utilityService: UtilityService,
    private formBuilder: FormBuilder
  ) { }

  public readonly newEnrolmentForm: FormGroup = this.formBuilder.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    emailAddress: [null],
    bankName: [null, Validators.required],
    accountNumber: [null, Validators.required],
    NIN: [null],
    BVN: [null, Validators.required],
  });

  ngOnInit(): void {
    this.getStates();
    this.getBanks();
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

  getBanks() {
    this.utilityService.getListOfBanks()
      .subscribe(
        (response: any) => {
          console.log(response);
          this.banks = response;
        }, (error: any) => {
          console.log(error)
        }
      )
  }
}
