import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  userName:string="Abdallah Bdreldin";
  showDetails:boolean=false;
  logs:number[]=[];
  isWhite:boolean=true

  blueStyle={
    "background-color":"blue"
  }
  classStyle={
    "whiteColor":this.isWhite
  }
  onClick(){
    this.userName = "";
}
 onToggleDisplay(){
  this.showDetails = !this.showDetails;
  this.logs.push(this.logs.length+1)
 }
}
