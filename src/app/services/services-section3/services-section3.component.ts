import { Component } from "@angular/core";

@Component({
  selector: "services-section3",
  template: `
    <div class="services-section-3-container">
      <div class="services-section-3-container-sub">
        <div *ngFor="let el of cards">
          <img src="{{ el }}" alt="" />
        </div>
      </div>
    </div>
  `,
  styleUrls: [
    "../sections-style.scss",
    "../cards-style.scss",
    "../../about/cards-style.scss",
    "../../about/cards-style.scss",
  ],
})
export class ServicesSection3Component {
  cards: string[] = [
    "../../../assets/images/java.png",
    "../../../assets/images/kotlin.jpeg",
    "../../../assets/images/spring-boot.png",
    "../../../assets/images/angular.png",
    "../../../assets/images/reactjs.png",
    "../../../assets/images/vue.png",
    "../../../assets/images/figma.png",
    "../../../assets/images/xd.png",
    "../../../assets/images/php.png",
    "../../../assets/images/sql.png",
    "../../../assets/images/postgres.png",
    "../../../assets/images/flutter.png",
    "../../../assets/images/android.png",
    "../../../assets/images/ios.png",
    "../../../assets/images/shell.png",
    "../../../assets/images/github.png",
  ];
}
