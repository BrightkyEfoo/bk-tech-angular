import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styles: [],
})
export class AboutComponent {
  commonHeroProps = {
    pageTitle: "About us",
    image: "../../../assets/images/9.jpg",
    title: "About BK-TECH",
  };
}
