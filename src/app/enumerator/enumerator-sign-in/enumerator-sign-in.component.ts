import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { ServerResponseDTO } from 'src/app/dto-interfaces/server-response-dto';
import { PopUpNotificationService } from 'src/app/pop-up-notification/pop-up-notification.service';

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
    private authService: AuthenticationService,
    private router: Router,
    private notificationservice: PopUpNotificationService
  ) { }

  ngOnInit(): void {
  }

  signIn() {
    this.authService.enumeratorSignIn(this.enumeratorSignInForm.value)
      .subscribe(
        (response: ServerResponseDTO) => {
          if (response.status == 'success') this.router.navigate(['enumerator/dashboard']);
        },
        (error: any) => this.notificationservice.addNotification(error, 5000)
      )
  }


}
