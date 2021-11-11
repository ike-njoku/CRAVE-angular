import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {
  selectedFileUrl: any;

  constructor() { }

  ngOnInit(): void {
  }

  selectPhoto(event: any) {
   let fileReader = new FileReader();

    fileReader.onload = () => {
      this.selectedFileUrl = fileReader.result
    }
   fileReader.readAsDataURL(event.target.files[0])
  }
}
