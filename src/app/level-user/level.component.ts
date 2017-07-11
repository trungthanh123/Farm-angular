import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'level-user',
  templateUrl: './level.component.html',
  
})
export class LevelUserComponent {
  //public max: number = 200;
  //public showWarning: boolean;
  public dynamic: number = 0;
  public type: string;
  public level:number = 0;
  @Input() username:string;
//   @Input() name:string;
 

  public constructor() {
    // this.AddPercents(a);
  }
  
  public AddPercents(exp:number) {
    this.dynamic = this.dynamic + exp;
    // this.dynamic = 50;
    // this.addExp.emit(a);
    // console.log(a);
    
    
    //this.dynamic = this.dynamic + this.expLevel;
    
    // let value:number = 0;
    // // let value = Math.floor((Math.random() * 100) + 1);
    // let type: string;
 
    // if (value < 25) {
    //   type = 'warning';
    // } else if (value < 50) {
    //   type = 'info';
    // } else if (value < 75) {
    //   type = 'info';
    // } else {
    //   type = 'success';
    // }
    // //this.dynamic = this.expLevel;
    // this.dynamic = this.dynamic + this.expLevel;
    
    if(this.dynamic > 100){
        this.dynamic = this.dynamic - 100;
        this.level++;
    }
    // this.type = type;
    // return this.dynamic;
  }
 
}