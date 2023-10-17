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
            <p class="simple-about-p">{{ el.desc | transloco }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../sections-style.scss", "../cards-style.scss"],
  styles: [
    `
      .title-blue {
        font-size: 34px;
        line-height: 46px;
        color: #050748;
        margin: 0;
        padding: 0;
        font-weight: 800;
      }
    `,
  ],
})
export class ServicesSection1Component {
  cards: { image: string; stat: string; desc: string }[] = [
    {
      desc: "services.section1.text1",
      image: "../../../assets/images/deal.svg",
      stat: "450",
    },
    {
      desc: "services.section1.text2",
      image: "../../../assets/images/computers.svg",
      stat: "48k",
    },
    {
      desc: "services.section1.text3",
      image: "../../../assets/images/worker.svg",
      stat: "95k",
    },
    {
      desc: "services.section1.text4",
      image: "../../../assets/images/customer-service.svg",
      stat: "24/7",
    },
  ];
}
