import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tool-main',
  templateUrl: './tool-main.component.html',
  styleUrls: ['./tool-main.component.scss']
})
export class ToolMainComponent implements OnInit {
  private toolMain: string;

  constructor() {
  }

  ngOnInit() {
    this.toolMain = '我是tool main app';
  }

}
