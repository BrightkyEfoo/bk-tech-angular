import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "about-section4",
  template: `
    <div class="about-section-4-container">
      <div class="about-section-4-container-sub">
        <span class="title-red">OUR PHILOSOPHY</span>
        <h2 class="title-blue">Our Business Philosophy</h2>

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
            <span class="title-red">{{ el.subTitle }}</span>
            <h2 class="title-blue">{{ el.title }}</h2>
            <p class="simple-about-p">{{ el.body }}</p>
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
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. Lorem Ipsum is
      simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/leadership.jpg",
      orientation: "left",
      subTitle: "SUPERVISION",
      title: "Leadership",
    },
    {
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. Lorem Ipsum is
      simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/collaboration.jpg",
      orientation: "right",
      subTitle: "STRENGTH",
      title: "Team Collaboration",
    },
    {
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text
      ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. Lorem Ipsum is
      simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/transparency.jpg",
      orientation: "left",
      subTitle: "QUALITY",
      title: "Transparency & Integrity",
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
