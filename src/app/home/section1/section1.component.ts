import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { SwiperContainer } from "swiper/element";
import { SwiperOptions } from "swiper/types";
import { Autoplay } from "swiper/modules";

@Component({
  selector: "home-section1",
  template: `
    <div class="section1-container">
      <div class="section1-container-sub">
        <swiper-container appSwiper1 #swiper [config]="swiperConfig">
          <swiper-slide *ngFor="let el of cards">
            <div class="{{ el.colorClass + ' card-1' }}">
              <img src="{{ el.image }}" />
              <p>{{ el.text }}</p>
            </div>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>
  `,
  styles: [
    `
      swiper-slide {
        margin: 0 30px;
        width: fit-content !important;
      }
    `,
  ],
  styleUrls: ["../section-style.scss", "../cards-style.scss"],
})
export class Section1Component implements AfterViewInit {
  @ViewChild("swiper") swiper!: ElementRef<SwiperContainer>;
  cards = [
    {
      text: "Marketing Solution",
      image: "../../../assets/images/marketing.png",
      colorClass: "back-3faee5",
    },
    {
      text: "Car Rental Solution",
      image: "../../../assets/images/car-rental.png",
      colorClass: "back-3faee5",
    },
    {
      text: "VR Solution",
      image: "../../../assets/images/vr.png",
      colorClass: "back-3faee5",
    },
    {
      text: "Custom App Solution",
      image: "../../../assets/images/app-develop.png",
      colorClass: "back-3faee5",
    },
    {
      text: "e-Wallet Solution",
      image: "../../../assets/images/ewallet.png",
      colorClass: "back-3faee5",
    },
    {
      text: "Startup Solution",
      image: "../../../assets/images/startup.png",
      colorClass: "back-3faee5",
    },
  ];

  index = 0;

  // Swiper
  swiperConfig: SwiperOptions = {
    modules: [Autoplay],
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    autoplay: {
      reverseDirection: true,
    },
  };

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
