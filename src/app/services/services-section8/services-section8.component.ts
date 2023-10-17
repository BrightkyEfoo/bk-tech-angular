import { Component } from "@angular/core";

@Component({
  selector: "services-section8",
  template: `
    <div class="services-section-8-container">
      <div class="services-section-8-container-sub">
        <span class="title-red">{{
          "services.section8.title" | transloco
        }}</span>
        <h2 class="title-blue">
          {{ "services.section8.subTitle" | transloco }}
        </h2>
        <p class="simple-about-p">{{ "services.section8.desc" | transloco }}</p>
        <div>
          <div class="services-card-4" *ngFor="let el of cards">
            <img src="{{ el.image }}" alt="" />
            <p class="title-blue">{{ el.title | transloco }}</p>
            <p class="simple-about-p">{{ el.subTitle | transloco }}</p>
          </div>
        </div>
        <button class="button-type-2 outlined-button">
          {{ "services.section8.button" | transloco }}
        </button>
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
export class ServicesSection8Component {
  cards: { image: string; title: string; subTitle: string }[] = [
    {
      image: "../../../assets/images/image-1.jpg",
      subTitle: "services.section8.cards0desc",
      title: "services.section8.cards0title",
    },
    {
      image: "../../../assets/images/image-2.jpg",
      subTitle: "services.section8.cards1desc",
      title: "services.section8.cards1title",
    },
    {
      image: "../../../assets/images/image-3.jpg",
      subTitle: "services.section8.cards2desc",
      title: "services.section8.cards2title",
    },
    {
      image: "../../../assets/images/image-4.jpg",
      subTitle: "services.section8.cards3desc",
      title: "services.section8.cards3title",
    },
    {
      image: "../../../assets/images/image-5.jpg",
      subTitle: "services.section8.cards4desc",
      title: "services.section8.cards4title",
    },
    {
      image: "../../../assets/images/image-6.jpg",
      subTitle: "services.section8.cards5desc",
      title: "services.section8.cards5title",
    },
  ];
}
