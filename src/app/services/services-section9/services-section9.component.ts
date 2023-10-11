import { Component } from "@angular/core";

@Component({
  selector: "services-section9",
  template: `
    <div class="services-section-9-container">
      <div class="services-section-9-container-sub">
        <span class="title-red">SERVICE TESTIMONIALS</span>
        <h2 class="title-blue">Client Speaks</h2>
        <span class="simple-about-p">
          Check our customers success stories.
        </span>
        <div>
          <div class="service-about-5" *ngFor="let el of cards">
            <div>
              <!-- <FaQuoteLeft size={40} /> -->
              <img src="{{ el.image }}" alt="" />
            </div>
            <p class="simple-about-p">{{ el.desc }}</p>
            <div>
              <h5>{{ el.name }}</h5>
              <p>{{ el.subDesc }}</p>
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
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      image: "../../../assets/images/envato.png",
      name: "John DOE",
      subDesc: "Business Owner, Jaipur",
      stars: 4,
    },
    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      image: "./../../assets/images/envato.png",
      name: "John DOE",
      subDesc: "Business Owner, Jaipur",
      stars: 3,
    },
    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      image: "./../../assets/images/envato.png",
      name: "John DOE",
      subDesc: "Business Owner, Jaipur",
      stars: 4,
    },
  ];
}
