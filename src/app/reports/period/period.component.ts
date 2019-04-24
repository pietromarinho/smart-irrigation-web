import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-period',
  templateUrl: './period.component.html',
  styleUrls: ['./period.component.scss']
})
export class PeriodComponent implements OnInit {

  dateStart: Date = new Date();
  dateEnd: Date = new Date();

  constructor(
  ) { }

  ngOnInit(): void {
    this.dateStart = null;
  }

  public printPage(): void {
    window.print();
  }

  checkDates(): boolean {
    if (!this.dateStart || !this.dateEnd) {
      return false;
    }
    return true;
  }

}
