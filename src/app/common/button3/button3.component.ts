import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button3",
  templateUrl: "./button3.component.html",
  styles: [],
})
export class Button3Component {
  @Input() isMobile : boolean | undefined;
  
  

}
