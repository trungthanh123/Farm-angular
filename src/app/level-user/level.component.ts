import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { AppService } from "../services/app.service";
@Component({
  selector: 'level-user',
  templateUrl: './level.component.html',

})
export class LevelUserComponent {
  public max: number = 100;
  exp:number;
  public dynamic: number = 0;
  public type: string;
  public level: number = 0;
  @Input() username: string;
  
  ngOnInit() {
  }

  public constructor(private _appService: AppService) {
    this.username = localStorage.getItem("username");
    _appService.exp$.subscribe(data => {
      this.exp = data;
      this.AddPercents(this.exp);
    });
    
  }
  //xem lai ham nay
  public AddPercents(exp: number) {
    console.log("exp from Farm:" + exp);
    //this.dynamic = this.dynamic + exp;
    let type: string;
    
    while (exp > this.max) {
      exp -= this.max;
      this.level++;
      this.max = this.max + 50 * this.level;
      type = 'danger';
      //alert("Congratulations! Level Up: " + this.level);
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
    this.level = 0;
    this.max = 100;
    this.exp += exp;
    this.AddPercents(this.exp);
  }

}