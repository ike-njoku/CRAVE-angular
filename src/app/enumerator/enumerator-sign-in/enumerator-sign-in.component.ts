import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enumerator-sign-in',
  templateUrl: './enumerator-sign-in.component.html',
  styleUrls: ['./enumerator-sign-in.component.css']
})
export class EnumeratorSignInComponent implements OnInit {
  submitting: boolean = false;
  enumeratorSignInForm: FormGroup = this.formBuilder.group({
    emailAddress: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  signIn() {

  }


}
