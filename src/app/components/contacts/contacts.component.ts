import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {

  contacts: Array<Object> = [
    { id: 100, name: 'Andy' },
    { id: 201, name: 'George' },
    { id: 302, name: 'Max' }
  ];

  constructor(private router: Router, private theCounter: CounterService) { }

  ngOnInit() {
  }

  viewDetails(id) {
    this.router.navigate(['contacts', id]);
  }

  incrementCounter() {
    this.theCounter.increment();
  }
}
