import { Component } from "@angular/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styles: [],
})
export class ServicesComponent {
  props = {
    pageTitle: "Services",
    image: "../../../assets/images/4.jpg",
    title: "Services",
  };
}
