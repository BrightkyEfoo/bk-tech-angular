import { Component } from "@angular/core";

@Component({
  selector: "services-section4",
  template: `<div class="services-section-4-container">
    <div class="services-section-4-container-sub">
      <span class="title-red">SERVICE</span>
      <h2 class="title-blue">Our Services</h2>
      <p class="simple-about-p">
        We think big and have hands in all leading technology platforms to
        provide you wide array of services.
      </p>
      <div>
        <div class="services-card-1" *ngFor="let el of cards">
          <img src="{{ el.image }}" alt="" />
          <div>
            <h3 class="title-blue">{{ el.title }}</h3>
            <p class="simple-about-p">{{ el.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div> `,
  styleUrls: [
    "../sections-style.scss",
    "../cards-style.scss",
    "../../about/cards-style.scss",
    "../../about/cards-style.scss",
  ],
})
export class ServicesSection4Component {
  cards: {
    image: string;
    title: string;
    desc: string;
  }[] = [
    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/mob-service-item2.png",
      title: "iOS App Development",
    },
    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/mob-service-item1.png",
      title: "Android App Development",
    },
    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/seo.png",
      title: "Search Engine Optimization",
    },
    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/smo.png",
      title: "Social Media Marketing",
    },
    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/logo-design.jpg",
      title: "Logo Designing",
    },
    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/visit-card.jpg",
      title: "Business Card Designs",
    },

    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/brochure-.jpg",
      title: "Brochure Design",
    },
    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/ppc.png",
      title: "Pay per Click",
    },
    {
      desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
      image: "../../../assets/images/mob-service-item3.png",
      title: "Cross Platform App Development",
    },
  ];
}
