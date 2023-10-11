import { Component } from "@angular/core";

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
            <span>We love Web.</span>
          </p>
          <p class="big-white">Precision.</p>
          <p class="big-white">Rapidite.</p>
          <p class="big-white">Robustesse.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
            pretium turpis.
          </p>
          <button>Essayez maintenant</button>
        </div>
        <!-- <Reveal> -->
        <img src="../../../assets/images/mobile_hero_banner.png" alt="hero" />
        <!-- </Reveal> -->
      </div>
    </div>
  `,
  styleUrls: ["./style.scss"],
})
export class HeroSectionComponent {}
