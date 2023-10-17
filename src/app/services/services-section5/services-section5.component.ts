import { Component } from "@angular/core";

@Component({
  selector: "services-section5",
  template: `
    <div class="services-section-5-container">
      <div class="services-section-5-container-sub">
        <span class="title-red">{{"services.section5.title" | transloco}}</span>
        <h2 class="title-blue">{{"services.section5.subTitle" | transloco}}</h2>
        <p class="simple-about-p">{{"services.section5.desc" | transloco}}</p>
        <div>
          <div
            *ngFor="let el of cards"
            class="{{
              el.inverse ? 'services-card-2 inversed' : 'services-card-2'
            }}"
          >
            <img src="{{ el.image }}" alt="" />
            <div>
              <span>{{ cards.indexOf(el) + 1 }}</span>
              <h4 class="title-blue">{{ el.title | transloco}}</h4>
              <p class="simple-about-p">{{ el.desc  | transloco }}</p>
            </div>
          </div>
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
export class ServicesSection5Component {
  cards: {
    image: string;
    title: string;
    desc: string;
    inverse?: boolean;
  }[] = [
    {
      desc: `services.section5.cards0desc`,
      image: "../../../assets/images/process-1.jpg",
      title: "services.section5.cards0title",
    },
    {
      desc: `services.section5.cards1desc`,
      image: "../../../assets/images/process-2.jpg",
      title: "services.section5.cards1title",
      inverse: true,
    },
    {
      desc: `services.section5.cards2desc`,
      image: "../../../assets/images/process-3.jpg",
      title: "services.section5.cards2title",
    },
    {
      desc: `services.section5.cards3desc`,
      image: "../../../assets/images/process-4.jpg",
      title: "services.section5.cards3title",
      inverse: true,
    },
  ];
}
