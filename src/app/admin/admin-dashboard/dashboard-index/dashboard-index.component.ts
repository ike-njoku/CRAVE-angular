import { Component, OnInit } from '@angular/core';
import { ServerResponseDTO } from 'src/app/dto-interfaces/server-response-dto';
import { EnumeratorService } from 'src/app/enumerator/create-enumerator/enumerator.service';
import { GetEnumeratorDto } from 'src/app/enumerator/get-enumerator-dto';
import { EnrolmentService } from 'src/app/shared-services/enrolment.service';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {
  allEnumerators!: GetEnumeratorDto[];
  allEnrolments: any;

  constructor(
    private enumeratorService: EnumeratorService,
    private enrolmentService: EnrolmentService
  ) { }

  ngOnInit(): void {
    this.getAllEnumerators();
    this.getAllEnrolments();
  }

  getAllEnrolments() {
    this.enrolmentService.getAllEnrolments()
      .subscribe(
        (response: ServerResponseDTO) => {
          this.allEnrolments = response.data;
        },
        (error: any) => console.log(error)
      )
  }

  getAllEnumerators() {
    this.enumeratorService.getAllEnumerators()
      .subscribe(
        (response: ServerResponseDTO) => {
          this.allEnumerators = response.data;
        }
      ),
      (error: string) => {
        console.log(error)
      }
  }

}
