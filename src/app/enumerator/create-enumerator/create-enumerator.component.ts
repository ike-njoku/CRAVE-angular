import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServerResponseDTO } from 'src/app/server-response-dto';
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
    private enumeratorService: EnumeratorService
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

  createEnumerator() {
    this.submitting = true;
    this.enumeratorService.createEnumerator(this.createEnumeratorForm.value)
      .subscribe(
        (response: ServerResponseDTO) => {
          console.log(response)
          console.log(response.message);
          this.submitting = false;
        },
        (error: any) => {
          console.log(error);
          this.submitting = false;
        }
      )
  }

}
