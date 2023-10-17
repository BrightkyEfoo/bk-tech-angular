import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "services-section2",
  template: `<div class="services-section-2-container">
    <div class="services-section-2-container-sub">
      <span class="title-red">{{"services.section2.title" | transloco}}</span>
      <h2 class="title-blue">{{"services.section2.subTitle" | transloco}}</h2>
      <div>
        <div
          class="about-card-3"
          style="{{
            'flexDirection:' +
              (isSmall
                ? 'column'
                : el.orientation === 'left'
                ? 'row'
                : 'row-reverse')
          }}"
          *ngFor="let el of cards"
        >
          <img src="{{ el.image }}" alt="" />
          <div>
            <span class="title-red">{{ el.subTitle | transloco }}</span>
            <h2 class="title-blue">{{ el.title | transloco }}</h2>
            <p class="simple-about-p">{{ el.body | transloco }}</p>
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
export class ServicesSection2Component implements OnInit {
  isSmall = false;
  cards: {
    image: string;
    subTitle: string;
    title: string;
    body: string;
    orientation: "left" | "right";
  }[] = [
    {
      body: `services.section2.cards0desc`,
      image: "../../../assets/images/app-develops.png",
      orientation: "left",
      subTitle: "services.section2.cards0title",
      title: "services.section2.cards0subTitle",
    },
    {
      body: `services.section2.cards1desc`,
      image: "../../../assets/images/digitalmarketing.png",
      orientation: "right",
      subTitle: "services.section2.cards1title",
      title: "services.section2.cards1subTitle",
    },
    {
      body: `services.section2.cards2desc`,
      image: "../../../assets/images/graphic-design.jpg",
      orientation: "left",
      subTitle: "services.section2.cards2title",
      title: "services.section2.cards2subTitle",
    },
  ];
  constructor(private responsive: BreakpointObserver) {}
  ngOnInit(): void {
    this.responsive.observe("(max-width: 1050px)").subscribe((result) => {
      if (result.matches) {
        this.isSmall = true;
      } else {
        this.isSmall = false;
      }
    });
  }
}
