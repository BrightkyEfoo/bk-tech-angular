import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styles: [],
})
export class ContactComponent {
  props = {
    pageTitle: "contact.title",
    image: "../../../assets/images/4.jpg",
    title: "contact.subTitle",
  };
}
