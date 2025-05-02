import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';

@Component({
  selector: 'app-component-input-example',
  imports: [PersonTableComponent],
  templateUrl: './component-input-example.component.html',
  styleUrl: './component-input-example.component.css'
})
export class ComponentInputExampleComponent {
  person0: Person = {
    givenName: "John",
    surName: "Smith",
    age: 55,
    email: "asda@gmail.com",
    address: "New York, USA"
  }

  person1: Person = {
    givenName: "Maria",
    surName: "Smith",
    age: 55,
    email: "msmith@gmail.com",
    address: "Athens, Gr"
  }

}
