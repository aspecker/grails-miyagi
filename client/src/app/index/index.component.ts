import {Component, OnInit} from '@angular/core';
import {Route, Router} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import { environment } from '../../environments/environment';
import { PersonService } from './person.service';

export interface Person {
  name: string,
  dob: Date,
  address: string
}

const PERSON_DATA: Person[] = [
 { name: "Test User", dob: new Date(), address: "123 Fake St"},
 { name: "Test User", dob: new Date(), address: "123 Fake St"},
 { name: "Test User", dob: new Date(), address: "123 Fake St"},
 { name: "Test User", dob: new Date(), address: "123 Fake St"},
];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  controllers: Array<any>;
  serverUrl: string;
  displayedColumns: string[] = ['name', 'dob', 'address'];
  dataSource = PERSON_DATA;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit(): void {
    this.serverUrl = environment.serverUrl;
    // this.personService.getPersonData().subscribe(applicationData => {
    //   console.log(applicationData)
    // });
  }
}
