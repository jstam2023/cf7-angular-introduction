import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent, EventBindExampleComponent, RouterOutlet, RouterLink, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  // name = "Jstam";

  // // Step 1: One way binding of data
  // person = {
  //   givenName: "John",
  //   surName: "Stam",
  //   age: 43,
  //   email: "jstam2023@aueb.gr"
  // }

  // Step 3: Component Input
  // person0: Person = {
  //   givenName: "Christodoulos",
  //   surName: "Fragoudakis",
  //   age: 55,
  //   email:"chfrag@aueb.gr",
  //   address: "Athens, Greece"
  // }

  // person1: Person = {
  //   givenName: "John",
  //   surName: "Doe",
  //   age: 32,
  //   email: "john@example.gr",
  //   address: 'New York, USA'
  // }

  

}
