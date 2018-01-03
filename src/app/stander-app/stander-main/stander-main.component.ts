import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-stander-main',
  templateUrl: './stander-main.component.html',
  styleUrls: ['./stander-main.component.scss']
})
export class StanderMainComponent implements OnInit {
  private standerMain: string;

  constructor() {
  }

  ngOnInit() {
    this.standerMain = '我是stander main app';
  }

}
