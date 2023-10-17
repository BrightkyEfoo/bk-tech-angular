import { Component } from "@angular/core";

@Component({
  selector: "about-section5",
  template: `
    <div class="about-section-5-container">
      <div class="about-section-5-container-sub">
        <span class="title-red">{{"about.section5.title" | transloco}}</span>
        <h2 class="title-blue">{{"about.section5.subTitle" | transloco}}</h2>
        <div>
          <div class="about-card-4" *ngFor="let el of cards">
            <img src="{{ el.image }}" alt="" />
            <h4>{{ el.title | transloco }}</h4>
            <p class="simple-about-p">{{ el.body | transloco }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../cards-style.scss", "../sections-style.scss"],
})
export class AboutSection5Component {
  cards: {
    image: string;
    title: string;
    body: string;
  }[] = [
    {
      body: "about.section5.cards0desc",
      image: "../../../assets/images/research.svg",
      title: "about.section5.cards0title",
    },
    {
      body: "about.section5.cards1desc",
      image: "../../../assets/images/chat.svg",
      title: "about.section5.cards1title",
    },
    {
      body: "about.section5.cards2desc",
      image: "../../../assets/images/monitor.svg",
      title: "about.section5.cards2title",
    },
    {
      body: "about.section5.cards3desc",
      image: "../../../assets/images/trasparency.svg",
      title: "about.section5.cards3title",
    },
  ];
}
