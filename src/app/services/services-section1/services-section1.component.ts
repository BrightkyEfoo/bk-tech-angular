import { Component } from "@angular/core";

@Component({
  selector: "services-section1",
  template: `
    <div class="services-section-1-container">
      <div class="services-section-1-container-sub">
        <div *ngFor="let el of cards">
          <img src="{{ el.image }}" alt="" />
          <div>
            <p class="title-blue">{{ el.stat }}</p>
            <p class="simple-about-p">{{ el.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../sections-style.scss", "../cards-style.scss"],
})
export class ServicesSection1Component {
  cards: { image: string; stat: string; desc: string }[] = [
    {
      desc: "Happy Clients",
      image: "../../../assets/images/deal.svg",
      stat: "450",
    },
    {
      desc: "Projects Done",
      image: "../../../assets/images/computers.svg",
      stat: "48k",
    },
    {
      desc: "Hours Worked",
      image: "../../../assets/images/worker.svg",
      stat: "95k",
    },
    {
      desc: "Support Available",
      image: "../../../assets/images/customer-service.svg",
      stat: "24/7",
    },
  ];
}
