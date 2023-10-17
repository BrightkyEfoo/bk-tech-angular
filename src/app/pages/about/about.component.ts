import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styles: [],
})
export class AboutComponent {
  commonHeroProps = {
    pageTitle: "about.title",
    image: "../../../assets/images/9.jpg",
    title: "about.subTitle",
  };
}
