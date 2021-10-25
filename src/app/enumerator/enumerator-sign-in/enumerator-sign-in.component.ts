import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

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
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.enumeratorSignIn(this.enumeratorSignInForm.value)
      .subscribe(
        (response: any) => console.log(response),
        (error: any) => {console.log(error)}
      )
  }


}
