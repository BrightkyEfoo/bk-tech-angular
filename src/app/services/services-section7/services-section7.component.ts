import { Component } from "@angular/core";

@Component({
  selector: "services-section7",
  template: `
    <div class="services-section-7-container">
      <div class="services-section-7-container-sub">
        <span class="title-red">{{"services.section7.title" | transloco}}</span>
        <h2 class="title-blue">{{"services.section7.subtitle" | transloco}}</h2>
        <p class="simple-about-p">{{"services.section7.desc" | transloco}}</p>
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
            <h4>{{ el.title | transloco }}</h4>
            <p>{{ el.subDesc | transloco }}</p>
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
            <p class="xxdd">{{ el.subTitle | transloco }}</p>
            <hr />
            <p *ngFor="let subEl of el.desc" class="xxdd">{{ subEl | transloco }}</p>
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
                {{"services.section7.button" | transloco }} <span class="circle"></span>
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
        "services.section7.cards0text4",
        "services.section7.cards0text5",
        "services.section7.cards0text6",
        "services.section7.cards0text7",
        "services.section7.cards0text8",
      ],
      image: "../../../assets/images/plan-1.svg",
      link: "#",
      price: 79.99,
      subDesc: "services.section7.cards0text3",
      subTitle: "services.section7.cards0text2",
      title: "services.section7.cards0text1",
    },
    {
      color: "blue",
      desc: [
        "services.section7.cards1text4",
        "services.section7.cards1text5",
        "services.section7.cards1text6",
        "services.section7.cards1text7",
        "services.section7.cards1text8",
      ],
      image: "../../../assets/images/plan-1.svg",
      link: "#",
      price: 79.99,
      subDesc: "services.section7.cards1text3",
      subTitle: "services.section7.cards1text2",
      title: "services.section7.cards1text1",
    },
    {
      color: "dark-blue",
      desc: [
        "services.section7.cards2text4",
        "services.section7.cards2text5",
        "services.section7.cards2text6",
        "services.section7.cards2text7",
        "services.section7.cards2text8",
      ],
      image: "../../../assets/images/plan-1.svg",
      link: "#",
      price: 79.99,
      subDesc: "services.section7.cards2text3",
      subTitle: "services.section7.cards2text2",
      title: "services.section7.cards2text1",
    },
  ];
}
