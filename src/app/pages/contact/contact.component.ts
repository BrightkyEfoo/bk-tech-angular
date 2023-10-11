import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styles: [],
})
export class ContactComponent {
  props = {
    pageTitle: "Contact us",
    image: "../../../assets/images/4.jpg",
    title: "Contact BK-TECH",
  };
}
