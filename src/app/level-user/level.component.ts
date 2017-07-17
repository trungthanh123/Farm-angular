import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'level-user',
  templateUrl: './level.component.html',

})
export class LevelUserComponent {
  public max: number = 100;
  
  public dynamic: number = 0;
  public type: string;
  public level: number = 0;
  @Input() username: string;


  public constructor() {
    this.username = localStorage.getItem("username");
  }

  public AddPercents(exp: number) {
    this.dynamic = this.dynamic + exp;
    let type: string;

    if (this.dynamic < this.max / 4) {
      type = 'danger';
    } else if (this.dynamic < this.max / 3) {
      type = 'warning';
    } else if (this.dynamic < this.max / 1.5) {
      type = 'success';
    } else {
      type = 'info';
    }


    if (this.dynamic > this.max) {
      this.dynamic = this.dynamic - this.max;
      this.level++;
      this.max = this.max + 50 * this.level;
      type = 'danger';
      alert("Congratulations! Level Up: " + this.level);
    }
    this.type = type;
  }

}