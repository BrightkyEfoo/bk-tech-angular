import { Component } from "@angular/core";

@Component({
  selector: "about-section5",
  template: `
    <div class="about-section-5-container">
      <div class="about-section-5-container-sub">
        <span class="title-red">WE ARE AWESOME</span>
        <h2 class="title-blue">Why Choose BK-TECH</h2>
        <div>
          <div class="about-card-4" *ngFor="let el of cards">
            <img src="{{ el.image }}" alt="" />
            <h4>{{ el.title }}</h4>
            <p class="simple-about-p">{{ el.body }}</p>
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
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "../../../assets/images/research.svg",
      title: "Reasearch and Analysis",
    },
    {
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "../../../assets/images/chat.svg",
      title: "Negotiation and power",
    },
    {
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "../../../assets/images/monitor.svg",
      title: "Creative and innovative solutions",
    },
    {
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      image: "../../../assets/images/trasparency.svg",
      title: "Trasparency and ease of work",
    },
  ];
}
