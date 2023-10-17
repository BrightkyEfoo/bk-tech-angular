import { Component } from "@angular/core";

@Component({
  selector: "services-section6",
  template: `
    <div class="services-section-6-container">
      <div class="services-section-6-container-sub">
        <span class="title-red">{{
          "services.section6.title" | transloco
        }}</span>
        <h2 class="title-blue">
          {{ "services.section6.subTitle" | transloco }}
        </h2>
        <p class="simple-about-p">{{ "services.section6.desc" | transloco }}</p>
        <div>
          <div class="services-card-1" *ngFor="let el of cards">
            <img src="{{ el.image }}" alt="" />
            <div>
              <h3 class="title-blue">{{ el.title | transloco }}</h3>
              <p class="simple-about-p">{{ el.desc | transloco }}</p>
            </div>
          </div>
        </div>
        <div>
          {{ "services.section6.text1" | transloco }}
          <span>{{ "services.section6.text2" | transloco }}</span>
          {{ "services.section6.text3" | transloco }}
          <button class="quote-button">
            {{ "services.section6.button" | transloco }}
            <span class="circle"></span>
          </button>
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
export class ServicesSection6Component {
  cards: {
    image: string;
    title: string;
    desc: string;
  }[] = [
    {
      desc: "services.section6.cards0desc",
      image: "../../../assets/images/teama.svg",
      title: "services.section6.cards0title",
    },
    {
      desc: "services.section6.cards1desc",
      image: "../../../assets/images/link.svg",
      title: "services.section6.cards1title",
    },
    {
      desc: "services.section6.cards2desc",
      image: "../../../assets/images/tech.svg",
      title: "services.section6.cards2title",
    },
    {
      desc: "services.section6.cards3desc",
      image: "../../../assets/images/tech.svg",
      title: "services.section6.cards3title",
    },
    {
      desc: "services.section6.cards4desc",
      image: "../../../assets/images/badge.svg",
      title: "services.section6.cards4title",
    },
    {
      desc: "services.section6.cards5desc",
      image: "../../../assets/images/tin.svg",
      title: "services.section6.cards5title",
    },
  ];
}
