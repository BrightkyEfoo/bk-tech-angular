import { Component } from "@angular/core";

@Component({
  selector: "home-section5",
  template: `
    <div>
      <div class="section5-container">
        <div class="section5-container-sub">
          <div class="section5-container-sub-right">
            <h3 class="first-title">{{ "home.section5.title" | transloco }}</h3>
            <p class="second-title">
              {{ "home.section5.text1" | transloco }}
            </p>
            <p>{{ "home.section5.text2" | transloco }}</p>
            <div class="card-5" *ngFor="let el of cards">
              <div>
                <img src="{{ el.image }}" />
              </div>
              <div>
                <p>{{ "home.section5.cards" + el.title | transloco }}</p>
                <p>{{ "home.section5.cards" + el.text | transloco }}</p>
              </div>
            </div>
          </div>
          <div class="section5-container-sub-left">
            <div class="image-container-sec-5">
              <img src="../../../assets/images/about-company.jpg" />
            </div>
            <p>
              {{ "home.section5.text3" | transloco }}
            </p>
            <p>{{ "home.section5.text4" | transloco }}</p>
            <p>
              {{ "home.section5.text5" | transloco }}
            </p>
            <button class="outlined-button" routerLink="/contact">
              {{ "home.section5.button" | transloco }}
              <!-- <MdOutlineArrowForwardIos color="white" /> -->
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../section-style.scss", "../cards-style.scss"],
})
export class Section5Component {
  cards = [
    {
      image: "../../../assets/images/computers2.svg",
      title: "0title",
      text: "0desc",
    },
    {
      image: "../../../assets/images/deal2.svg",
      title: "1title",
      text: "1desc",
    },
    {
      image: "../../../assets/images/worker.svg",
      title: "2title",
      text: "2desc",
    },
  ];
}
