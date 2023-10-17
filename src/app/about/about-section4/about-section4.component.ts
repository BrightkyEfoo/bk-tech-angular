import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "about-section4",
  template: `
    <div class="about-section-4-container">
      <div class="about-section-4-container-sub">
        <span class="title-red">{{ "about.section4.title" | transloco }}</span>
        <h2 class="title-blue">{{ "about.section4.subTitle" | transloco }}</h2>

        <div
          *ngFor="let el of cards"
          class="about-card-3"
          style="{{
            'flex-direction :' +
              (isSmall
                ? 'column'
                : el.orientation === 'left'
                ? 'row'
                : 'row-reverse')
          }}"
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
  `,
  styleUrls: ["../cards-style.scss", "../sections-style.scss"],
})
export class AboutSection4Component implements OnInit {
  cards: {
    image: string;
    subTitle: string;
    title: string;
    body: string;
    orientation: "left" | "right";
  }[] = [
    {
      body: `about.section4.cards0desc`,
      image: "../../../assets/images/leadership.jpg",
      orientation: "left",
      subTitle: "about.section4.cards0title",
      title: "about.section4.cards0subTitle",
    },
    {
      body: `about.section4.cards1desc`,
      image: "../../../assets/images/collaboration.jpg",
      orientation: "right",
      subTitle: "about.section4.cards1title",
      title: "about.section4.cards1subTitle",
    },
    {
      body: `about.section4.cards2desc`,
      image: "../../../assets/images/transparency.jpg",
      orientation: "left",
      subTitle: "about.section4.cards2title",
      title: "about.section4.cards2subTitle",
    },
  ];
  constructor(private router: Router, private responsive: BreakpointObserver) {}
  isSmall = false;

  ngOnInit(): void {
    this.responsive.observe("(max-width: 870px)").subscribe((result) => {
      if (result.matches) {
        this.isSmall = true;
      } else {
        this.isSmall = false;
      }
    });
  }
}
