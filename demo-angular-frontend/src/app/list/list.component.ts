import { Component, OnInit } from '@angular/core';
import {AppService} from '../service/app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employees: any;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getEmployeeList().subscribe((result) => {
      this.employees = result;
      console.log(this.employees);
    });
  }

}
