import { Component } from "@angular/core";

@Component({
  selector: "about-section2",
  template: `
    <div class="about-section-2-container">
      <div class="about-section-2-container-sub">
        <div>
          <img src="../../../assets/images/cheerful-businessman.jpg" />
        </div>
        <div>
          <span>Chairman's message</span>
          <h2>Bikos Maximus</h2>
          <p>Founder, Chairman & CFO</p>
          <p>
            <!-- <FaQuoteLeft /> -->
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. is
            simply dummy text of the printing and typesetting industry.
            <!-- <FaQuoteRight /> -->
          </p>
          <button class="quote-button">
            Meet Our Team
            <span class="circle"></span>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../cards-style.scss", "../sections-style.scss"],
})
export class AboutSection2Component {}
