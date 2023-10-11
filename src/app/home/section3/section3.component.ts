import { Component } from "@angular/core";

@Component({
  selector: "home-section3",
  template: `
    <div class="section3-container">
      <div class="section3-container-sub">
        <h3>UR WORK</h3>
        <p>Our Latest Creative Work</p>
        <div>
          <div class="{{ 'card-3 card-3-' + el.type }}" *ngFor="let el of cards">
            <div>
              <img src="{{ el.image }}" alt="card-3" />
            </div>
            <p>{{ el.text1 }}</p>
            <span>{{ el.text2 }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../section-style.scss", "../cards-style.scss"],
})
export class Section3Component {
  cards = [
    {
      image: "../../../assets/images/image-d.jpg",
      text1: "Ecommerce Development",
      text2: "Web Application",
      type: "large",
    },
    {
      image: "../../../assets/images/image-1.jpg",
      text1: "Creative App",
      text2: "iOS, Android",
      type: "small",
    },
    {
      image: "../../../assets/images/image-6.jpg",
      text1: "Brochure Design",
      text2: "Graphic, Print",
      type: "small",
    },
    {
      image: "../../../assets/images/image-c.jpg",
      text1: "Icon Pack",
      text2: "iOS, Android",
      type: "large",
    },
  ];
}
