import { Component } from "@angular/core";

@Component({
  selector: "home-section3",
  template: `
    <div class="section3-container">
      <div class="section3-container-sub">
        <h3>{{ "home.section3.title" | transloco }}</h3>
        <p>{{ "home.section3.text1" | transloco }}</p>
        <div>
          <div
            class="{{ 'card-3 card-3-' + el.type }}"
            *ngFor="let el of cards"
          >
            <div>
              <img src="{{ el.image }}" alt="card-3" />
            </div>
            <p>{{ "home.section3.cards" + el.text1 | transloco }}</p>
            <span>{{ "home.section3.cards" + el.text2 | transloco }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../section-style.scss", "../cards-style.scss"],
})
export class Section3Component {
  cards = [
    {
      image: "../../../assets/images/image-d.jpg",
      text1: "0title",
      text2: "0desc",
      type: "large",
    },
    {
      image: "../../../assets/images/image-1.jpg",
      text1: "1title",
      text2: "1desc",
      type: "small",
    },
    {
      image: "../../../assets/images/image-6.jpg",
      text1: "2title",
      text2: "1desc",
      type: "small",
    },
    {
      image: "../../../assets/images/image-c.jpg",
      text1: "3title",
      text2: "3desc",
      type: "large",
    },
  ];
}
