import { Component, OnInit } from '@angular/core';
import { ServerResponseDTO } from 'src/app/dto-interfaces/server-response-dto';
import { EnumeratorService } from 'src/app/enumerator/create-enumerator/enumerator.service';
import { GetEnumeratorDto } from 'src/app/enumerator/get-enumerator-dto';
import { EnrolmentService } from 'src/app/shared-services/enrolment.service';
import { WebSocketService } from 'src/app/shared-services/web-socket.service';

@Component({
  selector: 'app-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.css']
})
export class DashboardIndexComponent implements OnInit {
  allEnumerators!: GetEnumeratorDto[];
  allEnrolments!: any[];
  totalEnrolments!: number;
  totalEnumerators!: number;

  constructor(
    private enumeratorService: EnumeratorService,
    private enrolmentService: EnrolmentService,
    private webSocketService: WebSocketService
  ) { }

  ngOnInit(): void {
    this.getAllEnumerators();
    this.getAllEnrolments();
    this.listenForNewEnrolment();
  }

  listenForNewEnrolment() {
    this.webSocketService.listen('newEnrolment')
      .subscribe(
        (response: any) => {
          this.totalEnrolments += 1;
        }
      )
  }

  getAllEnrolments() {
    this.enrolmentService.getAllEnrolments()
      .subscribe(
        (response: ServerResponseDTO) => {
          this.allEnrolments = response.data;
          this.totalEnrolments = this.allEnrolments.length;
        },
        (error: any) => console.log(error)
      )
  }

  getAllEnumerators() {
    this.enumeratorService.getAllEnumerators()
      .subscribe(
        (response: ServerResponseDTO) => {
          this.allEnumerators = response.data;
          this.totalEnumerators = this.allEnumerators.length;
        }
      ),
      (error: string) => {
        console.log(error)
      }
  }

}
