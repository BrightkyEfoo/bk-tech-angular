import { Component } from "@angular/core";

@Component({
  selector: "home-section2",
  template: `
    <div class="section2-container">
      <div class="section2-container-sub">
        <div>
          <p>
            <span>
              <span>BK-TECH</span>
            </span>
          </p>
          <div>{{ "home.section2.text1" | transloco }}</div>
          <p>
            {{ "home.section2.text2" | transloco }}
          </p>
          <p>
            {{ "home.section2.text3" | transloco }}
          </p>
          <button class="outlined-button" routerLink="/contact">
            {{ "home.section2.button" | transloco }}
          </button>
        </div>
        <div>
          <div *ngFor="let el of cards" class="{{ el.colorClass + ' card-2' }}">
            <img src="{{ el.image }}" />
            <p>{{ el.text1 }}</p>
            <p>{{ ("home.section2.cards"+el.text2) | transloco}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../section-style.scss", "../cards-style.scss"],
})
export class Section2Component {
  cards = [
    {
      image: "../../../assets/images/startup.svg",
      text1: "20+",
      text2: "0",
      colorClass: "cc-blue",
    },
    {
      image: "../../../assets/images/team.svg",
      text1: "20+",
      text2: "1",
      colorClass: "cc-blue",
    },
    {
      image: "../../../assets/images/mobile.svg",
      text1: "1200+",
      text2: "2",
      colorClass: "cc-purple",
    },
    {
      image: "../../../assets/images/startup.svg",
      text1: "20+",
      text2: "3",
      colorClass: "cc-green",
    },
    {
      image: "../../../assets/images/team.svg",
      text1: "20+",
      text2: "4",
      colorClass: "cc-green",
    },
    {
      image: "../../../assets/images/mobile.svg",
      text1: "1200+",
      text2: "5",
      colorClass: "cc-purple",
    },
  ];
}
