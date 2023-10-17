import { Component } from "@angular/core";

@Component({
  selector: "about-section3",
  template: `
    <div class="about-section-3-container">
      <div class="about-section-3-container-sub">
        <div>
          <h2>{{ "about.section3.title" | transloco }}</h2>
          <div>
            <p>{{ "about.section3.text1" | transloco }}</p>
            <p>{{ "about.section3.text2" | transloco }}</p>
          </div>
        </div>
        <div>
          <div *ngFor="let el of cards" class="about-card2">
            <img src="{{ el.image }}" alt="" />
            <h3>{{ el.title | transloco }}</h3>
            <p>{{ el.body | transloco }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../cards-style.scss", "../sections-style.scss"],
})
export class AboutSection3Component {
  cards: {
    image: string;
    title: string;
    body: string;
  }[] = [
    {
      image: "../../../assets/images/vision.png",
      body: "about.section3.cards0desc",
      title: "about.section3.cards0title",
    },
    {
      image: "../../../assets/images/mountain.png",
      body: "about.section3.cards1desc",
      title: "about.section3.cards1title",
    },
  ];
}
