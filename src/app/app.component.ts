import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ugly-Sweaters';
// alert("alert alert!");
public show:boolean = false;
public buttonName:any = '';

toggle() {
  this.show = !this.show;
  if(this.show)  
    this.buttonName = "";
  else
    this.buttonName = "";
}

public cartShow:boolean = false;
public cartButtonName:any = '';

cartToggle() {
  this.cartShow = !this.cartShow;
  if(this.cartShow)  
    this.cartButtonName = "";
  else
    this.cartButtonName = "";
}
}
