import { Component } from "@angular/core";

@Component({
  selector: "services-section8",
  template: `
    <div class="services-section-8-container">
      <div class="services-section-8-container-sub">
        <span class="title-red">OUR PROJECTS</span>
        <h2 class="title-blue">Some of Our Works</h2>
        <p class="simple-about-p">
          We think big and have hands in all leading technology platforms to
          provide you wide array of services.
        </p>
        <div>
          <div class="services-card-4" *ngFor="let el of cards">
            <img src="{{ el.image }}" alt="" />
            <p class="title-blue">{{ el.title }}</p>
            <p class="simple-about-p">{{ el.subTitle }}</p>
          </div>
        </div>
        <button class="button-type-2 outlined-button">View More Projects</button>
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
export class ServicesSection8Component {
  cards: { image: string; title: string; subTitle: string }[] = [
    {
      image: "../../../assets/images/image-1.jpg",
      subTitle: "iOS, design",
      title: "Creative",
    },
    {
      image: "../../../assets/images/image-2.jpg",
      subTitle: "Graphic, Print",
      title: "Brochure Design",
    },
    {
      image: "../../../assets/images/image-3.jpg",
      subTitle: "Web Application",
      title: "Ecommerce Developpement",
    },
    {
      image: "../../../assets/images/image-4.jpg",
      subTitle: "Android & iOS, Design",
      title: "Icon Pack",
    },
    {
      image: "../../../assets/images/image-5.jpg",
      subTitle: "UI/UX Design",
      title: "Smart Watch App",
    },
    {
      image: "../../../assets/images/image-6.jpg",
      subTitle: "Graphic, Print",
      title: "Brochure Design",
    },
  ];
}
