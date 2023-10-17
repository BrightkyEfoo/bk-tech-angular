import { Component } from "@angular/core";

@Component({
  selector: "about-section6",
  template: `
    <div class="about-section-6-container">
      <div class="about-section-6-container-sub">
        <span class="title-red">{{ "about.section6.title" | transloco }}</span>
        <h2 class="title-blue">{{ "about.section6.subTitle" | transloco }}</h2>
        <div class="cards-container">
          <div class="about-card-5" *ngFor="let el of cards">
            <div>
              {{ el.timeTitle | transloco }}
              <small>{{ el.year | transloco }}</small>
            </div>
            <div>
              <h4 class="title-blue">{{ el.title | transloco }}</h4>
              <p class="simple-about-p">{{ el.body | transloco }}</p>
              <div class="badges-container" *ngIf="el.badges">
                <img
                  src="{{ imgEl }}"
                  alt=""
                  *ngFor="let imgEl of el?.badges"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../cards-style.scss", "../sections-style.scss"],
})
export class AboutSection6Component {
  cards: {
    title: string;
    body: string;
    timeTitle: string;
    year: string;
    badges?: string[];
  }[] = [
    {
      body: `about.section6.cards0desc`,
      timeTitle: "about.section6.cards0text1",
      title: "about.section6.cards0title",
      year: "about.section6.cards0text2",
    },
    {
      body: `about.section6.cards1desc`,
      timeTitle: "about.section6.cards1text1",
      title: "about.section6.cards1title",
      year: "about.section6.cards1text2",
      badges: [
        "../../../assets/images/badge.svg",
        "../../../assets/images/badge.svg",
        "../../../assets/images/badge.svg",
      ],
    },
    {
      body: `about.section6.cards2desc`,
      timeTitle: "about.section6.cards2text1",
      title: "about.section6.cards2title",
      year: "about.section6.cards2text2",
    },
    {
      body: `about.section6.cards3desc`,
      timeTitle: "about.section6.cards3text1",
      title: "about.section6.cards3title",
      year: "about.section6.cards3text2",
    },
    {
      body: `about.section6.cards4desc`,
      timeTitle: "about.section6.cards4text1",
      title: "about.section6.cards4title",
      year: "about.section6.cards4text2",
      badges: ["../../../assets/images/badge.svg"],
    },
  ];
}
