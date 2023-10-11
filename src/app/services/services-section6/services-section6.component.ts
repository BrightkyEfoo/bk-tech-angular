import { Component } from "@angular/core";

@Component({
  selector: "services-section6",
  template: `
    <div class="services-section-6-container">
      <div class="services-section-6-container-sub">
        <span class="title-red">WE DELIVER OUR BEST</span>
        <h2 class="title-blue">Why Choose BK-ECH</h2>
        <p class="simple-about-p">
          Donec metus lorem, vulputate at sapien sit amet, auctor iaculis lorem.
          In vel hendrerit nisi. Vestibulum eget risus velit.
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
        <div>
          Let's Start a <span>New Project</span> Together
          <button class="quote-button">
            Meet Our Team<span class="circle"></span>
          </button>
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
export class ServicesSection6Component {
  cards: {
    image: string;
    title: string;
    desc: string;
  }[] = [
    {
      desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
      image: "../../../assets/images/teama.svg",
      title: "Reliable Service. In House Team",
    },
    {
      desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
      image: "../../../assets/images/link.svg",
      title: "Trusted by People Like You",
    },
    {
      desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
      image: "../../../assets/images/tech.svg",
      title: "Complete Technical Competency",
    },
    {
      desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
      image: "../../../assets/images/tech.svg",
      title: "Friendly & Cordial in Nature",
    },
    {
      desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
      image: "../../../assets/images/badge.svg",
      title: "Excellent Quality Delivered on Time",
    },
    {
      desc: "In vel hendrerit nisi. Vestibulum eget risus velit.",
      image: "../../../assets/images/tin.svg",
      title: "Effective & Continuous Communication",
    },
  ];
}
