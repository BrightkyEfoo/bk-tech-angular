import { TranslocoService } from "@ngneat/transloco";
import { AfterContentInit, AfterRenderRef, AfterViewInit, Component, OnInit } from "@angular/core";
import Typed from "typed.js";
@Component({
  selector: "app-hero-section",
  template: `
    <div class="hero-section">
      <div class="hero-section-sub">
        <div>
          <p class="big-big-white">
            <!-- <TypeAnimation
              sequence={[
                "We love Web.",
                1000,
                "We love Mobile.",
                1000,
                "We love Graphics.",
                1000,
                "We love Marketing.",
                1000,
                "",
                100,
              ]}
              wrapper="span"
              speed={50}
              // style={{ fontSize: "1.6em", display: "inline-block" }}
              repeat={Infinity}
            /> -->
            <span class="animated"></span>
          </p>
          <p class="big-white">{{ "home.heroSection.text1" | transloco}}.</p>
          <p class="big-white">{{ "home.heroSection.text2" | transloco}}.</p>
          <p class="big-white">{{ "home.heroSection.text3" | transloco}}.</p>
          <p>
            {{ "home.heroSection.text4" | transloco}}
          </p>
          <button routerLink="/contact">{{ "home.heroSection.button" | transloco}}</button>
        </div>
        <!-- <Reveal> -->
        <img src="../../../assets/images/mobile_hero_banner.png" alt="hero" />
        <!-- </Reveal> -->
      </div>
    </div>
  `,
  styleUrls: ["./style.scss"],
})
export class HeroSectionComponent implements OnInit{
  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    const type = new Typed(".animated", {
      strings: [
        "We Love Web.",
        "We Love Mobile.",
        "We Love Graphics.",
        "We Love Marketing.",
      ],
      typeSpeed: 75,
      backSpeed: 60,
      loop: true,
    });
  }
}
