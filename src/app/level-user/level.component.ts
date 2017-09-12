import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { NgClass } from '@angular/common';
import { AppService } from "../services/app.service";
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'level-user',
  templateUrl: './level.component.html',

})
export class LevelUserComponent {
  @ViewChild('staticModal') public staticModal: ModalDirective;
  public max: number = 500;
  exp:number;
  public dynamic: number = 0;
  public type: string;
  public level: number = 0;
  @Input() username: string;
  
  ngOnInit() {
  }

  public constructor(private _appService: AppService) {
    // this.username = localStorage.getItem("username");
    _appService.exp$.subscribe(data => {
      this.exp = data;
      this.AddPercents(this.exp);
    });
  }

  public AddPercents(exp: number) {
    let type: string;
    while (exp > this.max) {
      exp -= this.max;
      this.level++;
      this.max = this.max + 100 * this.level;
      type = 'danger';
    }
    this.dynamic = exp;
    if (this.dynamic < this.max / 4) {
      type = 'danger';
    } else if (this.dynamic < this.max / 3) {
      type = 'warning';
    } else if (this.dynamic < this.max / 1.5) {
      type = 'success';
    } else {
      type = 'info';
    }
    this.type = type;
  }

  public addExp(exp:number) {
    let checkClass = false;
    let levelTemp = this.level;
    this.level = 0;
    this.max = 500;
    this.exp += exp;
    this.AddPercents(this.exp);
    if(this.level > levelTemp)
      {this.staticModal.show();
      checkClass = true;}
      
  }

}