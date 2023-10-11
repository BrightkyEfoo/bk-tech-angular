import { Component } from "@angular/core";

@Component({
  selector: "services-section7",
  template: `
    <div class="services-section-7-container">
      <div class="services-section-7-container-sub">
        <span class="title-red">PRICING</span>
        <h2 class="title-blue">Pricing Table Overview</h2>
        <p class="simple-about-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          <div
            *ngFor="let el of cards"
            class="{{
              'services-card-3 ' +
                (el.color === 'blue'
                  ? 'bg-blue'
                  : el.color === 'dark-blue'
                  ? 'bg-dark-blue'
                  : 'bg-red')
            }}"
          >
            <img src="{{ el.image }}" alt="" />
            <h4>{{ el.title }}"</h4>
            <p class="xxdd">{{ el.subTitle }}</p>
            <p
              class="{{
                'price-container ' +
                  (el.color === 'blue'
                    ? 'font-blue'
                    : el.color === 'dark-blue'
                    ? 'font-dark-blue'
                    : 'font-red')
              }}"
            >
              <span>$</span> {{ el.price.toFixed(2) }}
            </p>
            <p class="xxdd">{{ el.subTitle }}</p>
            <hr />
            <p *ngFor="let subEl of el.desc" class="xxdd">{{ subEl }}</p>
            <div>
              <button
                class="{{
                  'quote-button ' +
                    (el.color === 'blue'
                      ? 'bg-blue'
                      : el.color === 'dark-blue'
                      ? 'bg-dark-blue'
                      : 'bg-red')
                }}"
              >
                Get Started <span class="circle"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: [
    "../sections-style.scss",
    "../cards-style.scss",
    "../../about/cards-style.scss",
    "../../about/cards-style.scss",
  ],
})
export class ServicesSection7Component {
  cards: {
    color: "blue" | "red" | "dark-blue";
    image: string;
    title: string;
    subTitle: string;
    price: number;
    subDesc: string;
    desc: string[];
    link: string;
  }[] = [
    {
      color: "red",
      desc: [
        "Social Media Marketing",
        "2.100 Keywords",
        "One Way Link Building",
        "5 Free Optimization",
        "3 Press Releases",
      ],
      image: "../../../assets/images/plan-1.svg",
      link: "#",
      price: 79.99,
      subDesc: "Monthly Package",
      subTitle: "Great For Small Business",
      title: "PERSONAL",
    },
    {
      color: "blue",
      desc: [
        "Social Media Marketing",
        "2.100 Keywords",
        "One Way Link Building",
        "5 Free Optimization",
        "3 Press Releases",
      ],
      image: "../../../assets/images/plan-2.svg",
      link: "#",
      price: 79.99,
      subDesc: "Monthly Package",
      subTitle: "Great For Small Business",
      title: "PERSONAL",
    },
    {
      color: "dark-blue",
      desc: [
        "Social Media Marketing",
        "2.100 Keywords",
        "One Way Link Building",
        "5 Free Optimization",
        "3 Press Releases",
      ],
      image: "../../../assets/images/plan-3.svg",
      link: "#",
      price: 79.99,
      subDesc: "Monthly Package",
      subTitle: "Great For Small Business",
      title: "PERSONAL",
    },
  ];
}
