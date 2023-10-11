import { Component } from "@angular/core";

@Component({
  selector: "services-section10",
  template: `
    <div class="services-section-10-container">
      <div class="services-section-10-container-sub">
        <span class="title-red">LET'S WORK TOGETHER</span>
        <h2 class="title-blue">We Love to Listen to Your Requirements</h2>
        <button class="button-type-2 outlined-button" routerLink="/contact">Estimate Project</button>
        <p class="simple-about-p">
          Or call us now
          <!--<FaPhoneAlt size="{25}" />-->
          <span> (123) 456 7890</span>
        </p>
      </div>
      <img src="../../../assets/images/shape-31.svg" alt="" />
      <img src="../../../assets/images/shape-11.svg" alt="" />
      <img src="../../../assets/images/shape-13.svg" alt="" />
      <img src="../../../assets/images/shape-4.svg" alt="" />
    </div>
  `,
  styleUrls: [
    "../sections-style.scss",
    "../cards-style.scss",
    "../../about/cards-style.scss",
    "../../about/cards-style.scss",
  ],
})
export class ServicesSection10Component {}
