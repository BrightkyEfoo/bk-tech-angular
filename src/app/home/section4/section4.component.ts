import { Component } from "@angular/core";

@Component({
  selector: "home-section4",
  template: `
    <div class="section4-container">
      <div class="section4-container-sub">
        <h3 class="first-title">SERVICES</h3>
        <p class="second-title">Our Services</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's specimen book. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div>
          <div>
            <p>INTEGRATED SERVICES</p>
            <p>
              Lorem Ipsum is text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500.
            </p>
            <button>
              Learn More
              <!-- <MdOutlineArrowForwardIos color="white" /> -->
            </button>
          </div>
          <div
            class="{{ 'card-4 card-4' + el.size + ' card-4' + el.color }}"
            *ngFor="let el of cards"
          >
            <img src="{{ el.image }}" alt="" />
            <p>{{ el.title }}</p>
            <p>{{ el.subTitle }}</p>
            <p>{{ el.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../section-style.scss", "../cards-style.scss"],
})
export class Section4Component {
  cards: {
    image: string;
    title: string;
    subTitle: string;
    desc: string;
    size: "normal" | "large" | "small";
    color: "purple" | "blue" | "green";
  }[] = [
    {
      image: "../../../assets/images/card4/development.svg",
      title: "Web Development",
      subTitle: "PHP | .NET | JAVA | JOOMLA",
      size: "normal",
      desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
      color: "purple",
    },
    {
      image: "../../../assets/images/card4/ecommerce.svg",
      title: "Ecommerce Development",
      subTitle: "MAGENTO | WP | SHOPIFY | JOOMLA",
      size: "normal",
      desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
      color: "green",
    },
    {
      image: "../../../assets/images/card4/app.svg",
      title: "Mobile App Development",
      subTitle: "IPHONE | ANDROID | CROSS PLATFORM",
      size: "normal",
      desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
      color: "purple",
    },
    {
      image: "../../../assets/images/card4/tech.svg",
      title: "Trending Technologies",
      subTitle: "REACT.JS | NODE.JS | ANGULAR.JS",
      size: "normal",
      desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
      color: "blue",
    },
    {
      image: "../../../assets/images/card4/seo.svg",
      title: "Digital Marketing",
      subTitle: "SEO | SMO | PPC",
      size: "large",
      desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
      color: "green",
    },
  ];
}
