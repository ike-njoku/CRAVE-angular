import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerResponseDTO } from 'src/app/dto-interfaces/server-response-dto';
import { EnumeratorService } from './enumerator.service';

@Component({
  selector: 'app-create-enumerator',
  templateUrl: './create-enumerator.component.html',
  styleUrls: ['./create-enumerator.component.css']
})
export class CreateEnumeratorComponent implements OnInit {

  submitting: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private enumeratorService: EnumeratorService,
    private router: Router
  ) { }

  createEnumeratorForm: FormGroup = this.formBuilder.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    emailAddress: [null, [Validators.required, Validators.email]],
    primaryPhone: [null, Validators.required],
    secondaryPhone: [null, Validators.required],
  });

  ngOnInit(): void {
  }

  checkEmail() {

  }

  getEnumerators() {
    this.enumeratorService.getAllEnumerators()
      .subscribe(
        (response: any) => {
          console.log(response)
        },
        (error: any) => console.log(error)
      )
  }

  createEnumerator() {
    this.submitting = true;
    this.enumeratorService.createEnumerator(this.createEnumeratorForm.value)
      .subscribe(
        (response: ServerResponseDTO) => {
          if (response.status == 'success') {
            this.router.navigate(['enumerator/sign-in'])
          }
          this.submitting = false;
        },
        (error: any) => {
          console.log(error);
          this.submitting = false;
        }
      )
  }

}
