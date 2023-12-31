import { Component } from "@angular/core";

@Component({
  selector: "services-section9",
  template: `
    <div class="services-section-9-container">
      <div class="services-section-9-container-sub">
        <span class="title-red">{{ "services.section9.title" | transloco}}</span>
        <h2 class="title-blue">{{ "services.section9.subTitle" | transloco}}</h2>
        <span class="simple-about-p">
        {{ "services.section9.desc" | transloco}}
        </span>
        <div>
          <div class="service-about-5" *ngFor="let el of cards">
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="40"
                width="40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                ></path>
              </svg>
              <img src="{{ el.image }}" alt="" />
            </div>
            <p class="simple-about-p">{{ el.desc | transloco }}</p>
            <div>
              <h5>{{ el.name | transloco }}</h5>
              <p>{{ el.subDesc | transloco }}</p>
              
              <!-- <Rating name="read-only" value={stars} readOnly={true} /> -->
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
export class ServicesSection9Component {
  cards: {
    image: string;
    desc: string;
    name: string;
    subDesc: string;
    stars: number;
  }[] = [
    {
      desc: `services.section9.cards0text1`,
      image: "../../../assets/images/envato.png",
      name: "services.section9.cards0text2",
      subDesc: "services.section9.cards0text3",
      stars: 4,
    },
    {
      desc: `services.section9.cards0text1`,
      image: "./../../assets/images/envato.png",
      name: "services.section9.cards0text2",
      subDesc: "services.section9.cards1text3",
      stars: 3,
    },
    {
      desc: `services.section9.cards0text1`,
      image: "./../../assets/images/envato.png",
      name: "services.section9.cards0text2",
      subDesc: "services.section9.cards2text3",
      stars: 4,
    },
  ];
}
