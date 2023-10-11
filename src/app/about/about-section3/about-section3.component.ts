import { Component } from "@angular/core";

@Component({
  selector: "about-section3",
  template: `
    <div class="about-section-3-container">
      <div class="about-section-3-container-sub">
        <div>
          <h2>
            A group of creative minds dedicated to creating the best apps and
            websites in the world.
          </h2>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div>
          <div *ngFor="let el of cards" class="about-card2">
            <img src="{{ el.image }}" alt="" />
            <h3>{{ el.title }}</h3>
            <p>{{ el.body }}</p>
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
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      title: "Our Vision",
    },
    {
      image: "../../../assets/images/mountain.png",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      title: "Our Mission",
    },
  ];
}
