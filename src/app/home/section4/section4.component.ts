import { Component } from "@angular/core";

@Component({
  selector: "home-section4",
  template: `
    <div class="section4-container">
      <div class="section4-container-sub">
        <h3 class="first-title">{{ "home.section4.title" | transloco }}</h3>
        <p class="second-title">{{ "home.section4.text1" | transloco }}</p>
        <p>{{ "home.section4.text2" | transloco }}</p>
        <div>
          <div>
            <p>{{ "home.section4.cardTitle" | transloco }}</p>
            <p>{{ "home.section4.cardText" | transloco }}</p>
            <button>
              {{ "home.section4.cardLink" | transloco }}
            </button>
          </div>
          <div
            class="{{ 'card-4 card-4' + el.size + ' card-4' + el.color }}"
            *ngFor="let el of cards"
          >
            <img src="{{ el.image }}" alt="" />
            <p>{{ ("home.section4.cards"+el.title+"") | transloco}}</p>
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
      title: "0",
      subTitle: "PHP | .NET | JAVA | JOOMLA",
      size: "normal",
      desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
      color: "purple",
    },
    {
      image: "../../../assets/images/card4/ecommerce.svg",
      title: "1",
      subTitle: "MAGENTO | WP | SHOPIFY | JOOMLA",
      size: "normal",
      desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
      color: "green",
    },
    {
      image: "../../../assets/images/card4/app.svg",
      title: "2",
      subTitle: "IPHONE | ANDROID | CROSS PLATFORM",
      size: "normal",
      desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
      color: "purple",
    },
    {
      image: "../../../assets/images/card4/tech.svg",
      title: "3",
      subTitle: "REACT.JS | NODE.JS | ANGULAR.JS",
      size: "normal",
      desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
      color: "blue",
    },
    {
      image: "../../../assets/images/card4/seo.svg",
      title: "4",
      subTitle: "SEO | SMO | PPC",
      size: "large",
      desc: `Lorem Ipsum is text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`,
      color: "green",
    },
  ];
}
