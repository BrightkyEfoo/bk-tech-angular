import { Component } from "@angular/core";

@Component({
  selector: "services-section10",
  template: `
    <div class="services-section-10-container">
      <div class="services-section-10-container-sub">
        <span class="title-red">
          {{ "services.section10.title" | transloco }}
        </span>
        <h2 class="title-blue">
          {{ "services.section10.subTitle" | transloco }}
        </h2>
        <button class="button-type-2 outlined-button" routerLink="/contact">
          {{ "services.section10.button" | transloco }}
        </button>
        <p class="simple-about-p">
          {{ "services.section10.text1" | transloco }}
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
