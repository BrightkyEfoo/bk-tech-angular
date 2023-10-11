import { Component } from "@angular/core";

@Component({
  selector: "about-section6",
  template: `
    <div class="about-section-6-container">
      <div class="about-section-6-container-sub">
        <span class="title-red">THE TIME MACHINE</span>
        <h2 class="title-blue">A Timeline of Our Journey</h2>
        <div class="cards-container">
          <div class="about-card-5" *ngFor="let el of cards">
            <div>
              {{ el.timeTitle }}
              <small>{{ el.year }}</small>
            </div>
            <div>
              <h4 class="title-blue">{{ el.title }}</h4>
              <p class="simple-about-p">{{ el.body }}</p>
              <div class="badges-container" *ngIf="el.badges">
                <img src="{{ imgEl }}" alt="" *ngFor="let imgEl of el?.badges" />
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
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      timeTitle: "Establishment",
      title: "The Company Born",
      year: "2005",
    },
    {
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      timeTitle: "Establishment",
      title: "The Company Born",
      year: "2005",
      badges: [
        "../../../assets/images/badge.svg",
        "../../../assets/images/badge.svg",
        "../../../assets/images/badge.svg",
      ],
    },
    {
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      timeTitle: "Establishment",
      title: "The Company Born",
      year: "2005",
    },
    {
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      timeTitle: "Establishment",
      title: "The Company Born",
      year: "2005",
    },
    {
      body: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      timeTitle: "Establishment",
      title: "The Company Born",
      year: "2005",
      badges: ["../../../assets/images/badge.svg"],
    },
  ];
}
