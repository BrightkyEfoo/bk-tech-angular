import { Component } from "@angular/core";

@Component({
  selector: "services-section4",
  template: `<div class="services-section-4-container">
    <div class="services-section-4-container-sub">
      <span class="title-red">{{"services.section4.title" | transloco}}</span>
      <h2 class="title-blue">{{"services.section4.subTitle" | transloco}}</h2>
      <p class="simple-about-p">
      {{"services.section4.desc" | transloco}}
      </p>
      <div>
        <div class="services-card-1" *ngFor="let el of cards">
          <img src="{{ el.image }}" alt="" />
          <div>
            <h3 class="title-blue">{{ el.title | transloco }}</h3>
            <p class="simple-about-p">{{ el.desc | transloco }}</p>
          </div>
        </div>
      </div>
    </div>
  </div> `,
  styleUrls: [
    "../sections-style.scss",
    "../cards-style.scss",
    "../../about/cards-style.scss",
    "../../about/cards-style.scss",
  ],
})
export class ServicesSection4Component {
  cards: {
    image: string;
    title: string;
    desc: string;
  }[] = [
    {
      desc: `services.section4.cards0desc`,
      image: "../../../assets/images/mob-service-item2.png",
      title: "services.section4.cards0title",
    },
    {
      desc: `services.section4.cards1desc`,
      image: "../../../assets/images/mob-service-item1.png",
      title: "services.section4.cards1title",
    },
    {
      desc: `services.section4.cards2desc`,
      image: "../../../assets/images/seo.png",
      title: "services.section4.cards2title",
    },
    {
      desc: `services.section4.cards3desc`,
      image: "../../../assets/images/smo.png",
      title: "services.section4.cards3title",
    },
    {
      desc: `services.section4.cards4desc`,
      image: "../../../assets/images/logo-design.jpg",
      title: "services.section4.cards4title",
    },
    {
      desc: `services.section4.cards5desc`,
      image: "../../../assets/images/visit-card.jpg",
      title: "services.section4.cards5title",
    },

    {
      desc: `services.section4.cards6desc`,
      image: "../../../assets/images/brochure-.jpg",
      title: "services.section4.cards6title",
    },
    {
      desc: `services.section4.cards7desc`,
      image: "../../../assets/images/ppc.png",
      title: "services.section4.cards7title",
    },
    {
      desc: `services.section4.cards8desc`,
      image: "../../../assets/images/mob-service-item3.png",
      title: "services.section4.cards8title",
    },
  ];
}
