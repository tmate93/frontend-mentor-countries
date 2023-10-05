import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Counrty } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent {
  @Input() country!: Counrty<string>;

  constructor(protected router: Router) {}
}
