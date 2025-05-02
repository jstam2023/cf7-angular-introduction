import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "Eddie",
      "surName": "Swiers",
      "email": "eswiers0@who.int",
      "age": 11,
      "address": "9th Floor"
    }, {
      "givenName": "Delcina",
      "surName": "Banbrook",
      "email": "dbanbrook1@pbs.org",
      "age": 21,
      "address": "Room 340"
    }, {
      "givenName": "Cinda",
      "surName": "Coult",
      "email": "ccoult2@fema.gov",
      "age": 31,
      "address": "Apt 1748"
    }, {
      "givenName": "Rickard",
      "surName": "Hearnden",
      "email": "rhearnden3@eepurl.com",
      "age": 41,
      "address": "PO Box 50032"
    }, {
      "givenName": "Caren",
      "surName": "Sifleet",
      "email": "csifleet4@dyndns.org",
      "age": 51,
      "address": "Apt 116"
    }, {
      "givenName": "Mariel",
      "surName": "Lidington",
      "email": "mlidington5@1und1.de",
      "age": 61,
      "address": "Apt 47"
    }, {
      "givenName": "Diannne",
      "surName": "Rudloff",
      "email": "drudloff6@prweb.com",
      "age": 17,
      "address": "PO Box 569"
    }, {
      "givenName": "Maynord",
      "surName": "Scholard",
      "email": "mscholard7@ameblo.jp",
      "age": 81,
      "address": "Room 1333"
    }, {
      "givenName": "Kin",
      "surName": "Desborough",
      "email": "kdesborough8@goodreads.com",
      "age": 19,
      "address": "Apt 581"
    }, {
      "givenName": "Itch",
      "surName": "Pennini",
      "email": "ipennini9@seesaa.net",
      "age": 101,
      "address": "Suite 16"
    }, {
      "givenName": "Jud",
      "surName": "Gloster",
      "email": "jglostera@rediff.com",
      "age": 11,
      "address": "7th Floor"
    }, {
      "givenName": "Moishe",
      "surName": "Attoe",
      "email": "mattoeb@github.io",
      "age": 12,
      "address": "Room 1396"
    }, {
      "givenName": "Carlen",
      "surName": "Whinney",
      "email": "cwhinneyc@forbes.com",
      "age": 13,
      "address": "PO Box 96798"
    }, {
      "givenName": "Berta",
      "surName": "Edwinson",
      "email": "bedwinsond@domainmarket.com",
      "age": 14,
      "address": "18th Floor"
    }, {
      "givenName": "Sorcha",
      "surName": "Kealey",
      "email": "skealeye@nbcnews.com",
      "age": 15,
      "address": "Suite 38"
    }, {
      "givenName": "Alvina",
      "surName": "Carradice",
      "email": "acarradicef@wufoo.com",
      "age": 16,
      "address": "Apt 1255"
    }, {
      "givenName": "Ric",
      "surName": "Le Grys",
      "email": "rlegrysg@eventbrite.com",
      "age": 17,
      "address": "Room 1152"
    }, {
      "givenName": "Shel",
      "surName": "Giametti",
      "email": "sgiamettih@people.com.cn",
      "age": 18,
      "address": "14th Floor"
    }, {
      "givenName": "Evey",
      "surName": "Pirouet",
      "email": "epiroueti@ning.com",
      "age": 19,
      "address": "11th Floor"
    }, {
      "givenName": "Roman",
      "surName": "Westcarr",
      "email": "rwestcarrj@spiegel.de",
      "age": 20,
      "address": "19th Floor"
    }
  ]
}
