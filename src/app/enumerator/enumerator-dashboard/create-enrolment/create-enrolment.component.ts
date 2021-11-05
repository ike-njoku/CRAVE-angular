import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Socket } from 'ngx-socket-io';
import { GetBankDTO } from 'src/app/dto-interfaces/get-bank-dto';
import { GetStateAndLgaDto, LGA } from 'src/app/dto-interfaces/get-state-and-lga-dto';
import { EnrolmentService } from 'src/app/shared-services/enrolment.service';
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
    private formBuilder: FormBuilder,
    private enrolmentService: EnrolmentService,
    private socket: Socket
  ) { }

  public newEnrolmentForm: FormGroup = this.formBuilder.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    emailAddress: [null],
    bankName: [null, Validators.required],
    accountNumber: [null, Validators.required],
    NIN: [null],
    BVN: [null, Validators.required],
    occupation: [null, Validators.required],
    state: [null, Validators.required],
    lga: [null, Validators.required],
    city: [null, Validators.required],
    address: [null, Validators.required],
    gender: [null, Validators.required],
    primaryPhoneNumber: [null, Validators.required],
    secondaryPhoneNumber: [null],
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

  submitEnrolment() {
    this.enrolmentService.createNewEnrolment(this.newEnrolmentForm.value)
  }
}
