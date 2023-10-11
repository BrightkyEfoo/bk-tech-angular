import { Component } from "@angular/core";

@Component({
  selector: "services-section5",
  template: `
    <div class="services-section-5-container">
      <div class="services-section-5-container-sub">
        <span class="title-red">PROCESS</span>
        <h2 class="title-blue">Our App Development Process</h2>
        <p class="simple-about-p">
          Our design process follows a proven approach. We begin with a deep
          understanding of your needs and create a planning template.
        </p>
        <div>
          <div
            *ngFor="let el of cards"
            class="{{
              el.inverse ? 'services-card-2 inversed' : 'services-card-2'
            }}"
          >
            <img src="{{ el.image }}" alt="" />
            <div>
              <span>{{ cards.indexOf(el) + 1 }}</span>
              <h4 class="title-blue">{{ el.title }}</h4>
              <p class="simple-about-p">{{ el.desc }}</p>
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
export class ServicesSection5Component {
  cards: {
    image: string;
    title: string;
    desc: string;
    inverse?: boolean;
  }[] = [
    {
      desc: `Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.`,
      image: "../../../assets/images/process-1.jpg",
      title: "Requirement Gathering",
    },
    {
      desc: `Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.`,
      image: "../../../assets/images/process-2.jpg",
      title: "Requirement Gathering",
      inverse: true,
    },
    {
      desc: `Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.`,
      image: "../../../assets/images/process-3.jpg",
      title: "Requirement Gathering",
    },
    {
      desc: `Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem. In vel hendrerit nisi. Vestibulum eget risus velit. Aliquam tristique libero at dui sodales, et placerat orci lobortis. Maecenas ipsum neque, elementum id dignissim et, imperdiet vitae mauris.`,
      image: "../../../assets/images/process-4.jpg",
      title: "Requirement Gathering",
      inverse: true,
    },
  ];
}
