import { Component } from "@angular/core";

@Component({
  selector: "about-section1",
  template: `
    <div class="about-section-1-container">
      <div class="about-section-1-container-sub">
        <img src="../../../assets/images/company-about.png" alt="company-about" />
        <div>
          <p>ABOUT US</p>
          <h2>About BK-TECH</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. is simply dummy text of the printing and
            typesetting industry.
          </p>
          <div>
            <div class="about-card1-container" *ngFor="let el of cards">
              <p>{{ el.text1 }}</p>
              <p>{{ el.text2 }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../cards-style.scss", "../sections-style.scss"],
})
export class AboutSection1Component {
  cards: { text1: string; text2: string }[] = [
    { text1: "450", text2: "Happy Clients" },
    { text1: "95k", text2: "Hours Worked" },
    { text1: "850", text2: "Projects Done" },
  ];
}
