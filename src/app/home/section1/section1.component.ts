import {
  Component,
  OnInit,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "home-section1",
  template: `
    <div class="section1-container">
      <div class="section1-container-sub">
        <div class="custom-swiper" id="custom-swiper">
          <div *ngFor="let el of cards">
            <div class="{{ el.colorClass + ' card-1' }}">
              <img src="{{ el.image }}" />
              <p>{{ el.text }}</p>
            </div>
          </div>
        </div>
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
  styleUrls: ["../section-style.scss", "../cards-style.scss" , "./style.scss"],
})
export class Section1Component implements OnInit , OnDestroy{
  
  // @ViewChild("swiper") swiper!: ElementRef<SwiperContainer>;
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

  myInter: NodeJS.Timeout | undefined;
  selected = 0;

  ngOnDestroy(): void {
    clearInterval(this.myInter)
  }
  ngOnInit(): void {
    this.myInter = setInterval(() => {
      const ell = document.getElementById(
        "custom-swiper"
      );
      if (this.selected === this.cards.length - 3) {
        this.selected = 0;
      } else {
        this.selected = this.selected + 1;
      }
      ell?.scrollTo({
        top: 0,
        left: this.selected * ell.clientWidth / 3,
        behavior: "smooth",
      });
      // console.log("selected", selected);
    }, 2000);
  }
  
}
